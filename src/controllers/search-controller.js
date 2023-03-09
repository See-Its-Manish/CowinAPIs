const {SearchService} = require('../services/index');
const {StatusCodes}  =require('http-status-codes');

const getAllCetersByPincode = async (req,res) => {

    try {
        const response = await SearchService.getCentersByPinCode(req.params);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            err : {},
            message : "Successfully fetched the centers"
        });
    } catch (error) {
        console.log("Something went wrong in Search controller",error);
        return res.status(500).json({
            data : {},
            success : false,
            err : {error},
            message : "Not able to fetch the centers"
        });
    }

}

const getAllStates = async (req,res) => {
    try {
        const response = await SearchService.getAllStates();
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            err : {},
            message : "Successfully fetched all the states"
        });
    } catch (error) {
        console.log("Something went wrong in controller",error);
        return res.status(500).json({
            data : {},
            success : false,
            err : {error},
            message : "Not able to fetch the states"
        });
    }
}


const getAllDistrictsByStateId = async (req,res) => {
    try {
        const response = await SearchService.getAllDistrictsByStateId(req.params);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            err : {},
            message : "Successfully fetched all the districts"
        });
    } catch (error) {
        console.log("Something went wrong in controller",error);
        return res.status(500).json({
            data : {},
            success : false,
            err : {error},
            message : "Not able to fetch the districts"
        });
    }
}

const getAllCentersByDistrictIdAndDate = async (req,res) => {
    try {
        const response = await SearchService.getAllCentersByDistrictIdAndDate(req.params);
        res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            err : {},
            message : "Successfully fetched all the centers in the district"
        });
    } catch (error) {
        console.log("Something went wrong in controller",error);
        return res.status(500).json({
            data : {},
            success : false,
            err : {error},
            message : "Not able to fetch the centers in the districts"
        });
    }
}

module.exports = {
    getAllCetersByPincode,
    getAllStates,
    getAllDistrictsByStateId,
    getAllCentersByDistrictIdAndDate
}