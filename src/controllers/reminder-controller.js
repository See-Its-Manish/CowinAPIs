const {ReminderService} = require('../services/index');
const {StatusCodes} = require('http-status-codes');
const reminderService = new ReminderService();

const create = async (req,res) => {

    try {
        const response = await reminderService.create(req.body);
       
        return res.status(StatusCodes.CREATED).json({
            data : response,
            success : true,
            err : {},
            message : "Successfully created your reminder"
        });
    } catch (error) {
        console.log("Something went wrong in Reminder controller",error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            err : {error},
            message : "Not able to create your reminder"
        });
    }
}

const destroy = async (req,res) => {

    try {
        const response = await reminderService.destroy(req.params.reminderId);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            err : {},
            message : "Successfully deleted your reminder"
        });
    } catch (error) {
        console.log("Something went wrong in Reminder controller",error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            err : {error},
            message : "Not able to delete your reminder"
        });
    }
}

const getReminderById = async (req,res) => {

    try {
        const response = await reminderService.getReminderById(req.params.reminderId);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            err : {},
            message : "Successfully fetched the reminders"
        });
    } catch (error) {
        console.log("Something went wrong in Reminder controller",error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            err : {error},
            message : "Not able to fetch the reminders"
        });
    }
}

const getAllRemindersByEmail = async (req,res) => {

    try {
        const response = await reminderService.getAllRemindersByEmail(req.body.email);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            err : {},
            message : "Successfully fetched all the reminders"
        });
    } catch (error) {
        console.log("Something went wrong in Reminder controller",error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            err : {error},
            message : "Not able to fetch the reminders"
        });
    }
}




module.exports = {
    create,
    destroy,
    getReminderById,
    getAllRemindersByEmail
}