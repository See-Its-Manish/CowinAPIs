const {ReminderRepository} = require('../repository/index');

class ReminderService {

    constructor() {
        this.reminderRepository = new ReminderRepository();
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

    async getAllRemindersByEmail(email) {
        try {
            const result = await this.reminderRepository.getAllRemindersByEmail(email);
            return result;
        } catch (error) {
            console.log("Something went wrong in reminder service");
            throw error;
        }
    }

}

module.exports = ReminderService;