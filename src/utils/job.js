const cron = require('node-cron');
const {ReminderService, SearchService} = require('../services/index');
const getDates = require('./dates-between-two-dates');
const reminderService = new ReminderService();
const {Center} = require('../models/index');
const setupJobs = async () => {

    cron.schedule('0 * * * *', async() => {

        const reminders = await reminderService.getAllReminders();
        
        for(const reminderObject of reminders){

            reminder = reminderObject.dataValues;
            const todaysDate = new Date();

            // If the Current date has passed endingDate of reminder
            if(todaysDate > reminder['endingDate']) {
                await reminderService.destroy(reminder['id']);
                await Center.destroy({
                    where : {
                        reminderId : reminder['id']
                    }
                });
            }
            else {

                // First of all generate all the Dates
                const startingDate = ((reminder['startingDate'] > todaysDate) ? reminder['startingDate'] : todaysDate);
                const dates = getDates(new Date(startingDate), new Date(reminder['endingDate']));

                let messageObject = [];
                // Now for each valid date
                for(const date of dates) {

                    // Created Indian Style format date
                    indianStyleDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

                    // Fetching all centers by pincode and district for the corresponding date and reminder
                    const centersByPincode = await SearchService.getCentersByPinCode({
                        date : indianStyleDate,
                        pincode : reminder['pincode']
                    });
                    const centersByDistrict = await SearchService.getAllCentersByDistrictIdAndDate({
                        date : indianStyleDate,
                        districtId : reminder['districtId']
                    });

                    for(const vaccinecenter of centersByPincode.sessions) {
                        const response = await reminderService.isCenterPresent({
                                centerId : vaccinecenter['center_id'],
                                reminderId : reminder['id'],
                                date : date
                        });
                        if(!response)
                        {
                            await Center.create({
                                centerId : vaccinecenter['center_id'],
                                reminderId : reminder['id'],
                                date : date
                            });

                            messageObject.push(vaccinecenter);

                        }

                    };
                    for(const vaccinecenter of centersByDistrict.sessions){
                        const response = await reminderService.isCenterPresent({
                            centerId : vaccinecenter['center_id'],
                            reminderId : reminder['id'],
                            date : date
                        });
                        if(!response)
                        {
                            await Center.create({
                                centerId : vaccinecenter['center_id'],
                                reminderId : reminder['id'],
                                date : date
                            });

                            messageObject.push(vaccinecenter);

                        }

                    };


                };
                if(messageObject.length != 0)
                reminderService.sendBasicEmail(
                    "cowinApiReminderService",
                    reminder['email'],
                    'Vaccine centers are available, Get yourself vaccinated!',
                    JSON.stringify(messageObject)
                );

            }
        };
    });
   


}

module.exports = setupJobs;