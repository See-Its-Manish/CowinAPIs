const express = require('express');

const router = express.Router();
const {SearchController, AuthenticationController} = require('../../controllers/index');

router.get('/searchdistricts/:stateId', SearchController.getAllDistrictsByStateId);
router.get('/searchcentersbypincode/:pincode/:date',SearchController.getAllCetersByPincode);
router.get('/searchstates',SearchController.getAllStates);
router.get('/searchcentersbydistrict/:districtId/:date',SearchController.getAllCentersByDistrictIdAndDate);



router.post('/authentication/generateOTP', AuthenticationController.generateOTP);
router.post('/authentication/confirmOTP', AuthenticationController.confirmOTP);
router.get('/authentication/fetchcertificate/:beneficiary_reference_id', AuthenticationController.fetchVaccinationCertfication);

module.exports = router;