const {SearchService} = require('../services/index');

const getAllCetersByPincode = async (req,res) => {

    try {
        const response = await SearchService.getCentersByPinCode(req.params);
        return res.status(200).json({
            data : response.data,
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

module.exports = {
    getAllCetersByPincode
}