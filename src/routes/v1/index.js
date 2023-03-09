const express = require('express');

const router = express.Router();
const {SearchController, AuthenticationController, UserController, ReminderController} = require('../../controllers/index');

// For Search Controller
router.get('/searchdistricts/:stateId', SearchController.getAllDistrictsByStateId);
router.get('/searchcentersbypincode/:pincode/:date',SearchController.getAllCetersByPincode);
router.get('/searchstates',SearchController.getAllStates);
router.get('/searchcentersbydistrict/:districtId/:date',SearchController.getAllCentersByDistrictIdAndDate);


// For Authentication Controller
router.post('/authentication/generateOTP', AuthenticationController.generateOTP);
router.post('/authentication/confirmOTP', AuthenticationController.confirmOTP);
router.get('/authentication/fetchcertificate/:beneficiary_reference_id', AuthenticationController.fetchVaccinationCertfication);


// For Reminder Controller
router.post('/createreminder',ReminderController.create);
router.delete('/deletereminder/:reminderId',ReminderController.destroy);
router.get('/getreminderbyid/:reminderId',ReminderController.getReminderById);
router.get('/getremindersbyemail',ReminderController.getAllRemindersByEmail);

module.exports = router;