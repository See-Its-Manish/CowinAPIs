const {ReminderRepository} = require('../repository/index');
const sender = require('../config/emailConfig');
class ReminderService {

    constructor() {
        this.reminderRepository = new ReminderRepository();
    }

    async sendBasicEmail(mailFrom, mailTo, mailSubject, mailBody){

        try {
            const response = sender.sendMail({
                from : mailFrom,
                to : mailTo,
                subject : mailSubject,
                text : mailBody
            });
            console.log(response)
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async create(data) {
        try {
            const result = await this.reminderRepository.create(data);
            return data;
        } catch (error) {
            console.log("Something went wrong in reminder service");
            throw error;
        }
    }

    async destroy(reminderId) {
        try {
            const result = await this.reminderRepository.destroy(reminderId);
            return result;
        } catch (error) {
            console.log("Something went wrong in reminder service");
            throw error;
        }
    }

    async getReminderById(reminderId) {
        try {
            const result = await this.reminderRepository.getReminderById(reminderId);
            return result;
        } catch (error) {
            console.log("Something went wrong in reminder service");
            throw error;
        }
    }

    async getAllReminders() {
        try {
            const result = await this.reminderRepository.getAllReminders();
            return result;
        } catch (error) {
            console.log("Something went wrong in reminder service");
            throw error;
        }
    }

    async getAllRemindersByEmail(email) {
        try {
            const result = await this.reminderRepository.getAllRemindersByEmail(email);
            return result;
        } catch (error) {
            console.log("Something went wrong in reminder service");
            throw error;
        }
    }

    async isCenterPresent(filters) {
        try {
            const result = await this.reminderRepository.isCenterPresent(filters);
            return result;
        } catch (error) {
            console.log("Something went wrong in reminder service");
            throw error;
        }
    }

}

module.exports = ReminderService;