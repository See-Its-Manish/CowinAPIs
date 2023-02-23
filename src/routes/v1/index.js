const express = require('express');

const router = express.Router();
const {SearchController} = require('../../controllers/index');

router.get('/search/:pincode/:date',SearchController.getAllCetersByPincode)

module.exports = router;