const express = require('express');

const router = express.Router();
const {SearchController} = require('../../controllers/index');

router.get('/searchdistricts/:stateId', SearchController.getAllDistrictsByStateId);
router.get('/searchcentersbypincode/:pincode/:date',SearchController.getAllCetersByPincode);
router.get('/searchstates',SearchController.getAllStates);
router.get('/searchcentersbydistrict/:districtId/:date',SearchController.getAllCentersByDistrictIdAndDate);
module.exports = router;