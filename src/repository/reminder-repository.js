const {Reminder, Center} = require('../models/index');
class ReminderRepository {

    async create(data){
        try {
            const result = await Reminder.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in reminder repo");
            throw error;
        }
    }
    
    async getReminderById(reminderId) {
        try {
            const reminders = await Reminder.findAll({
                where : {
                    id : reminderId
                }
            });
            return reminders;
        } catch (error) {
            console.log("Something went wrong in the reminder repo!");
            throw error;
        }
    }

    async getAllRemindersByEmail(email) {
        try {
            const reminders = await Reminder.findAll({
                where : {
                    email : email
                }
            });
            return reminders;
        } catch (error) {
            console.log("Something went wrong in the reminder repo!");
            throw error;
        }
    }

    async destroy(reminderId) {
        try {
            await Center.destroy({
                where : {
                    reminderId : reminderId
                }
            });
            const result = await Reminder.destroy({
                where : {
                    id : reminderId
                }
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in the reminder repo!");
            throw error;
        }
    }


    async getAllReminders() {
        try {
            const result = await Reminder.findAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in reminder repo!");
            throw error;
        }
    }

    async isCenterPresent(filters) {
        try {
           const result = await Center.findOne({
            where : filters
           });
           return ((result) ? true : false);
        } catch (error) {
            console.log("Something went wrong in reminder repo");
            throw error;
        }
    }



}

module.exports = ReminderRepository;