const {SearchRepository} = require('../repository/index');

const searchRepository = new SearchRepository();

const getCentersByPinCode = async (data) => {
    try {
        const response = await searchRepository.getAllCentersByPincodeAndDate(data);
        return response;
    } catch (error) {
        console.log("Something went wrong in Search service");
        throw error;
    }

}

const getAllStates = async () => {
    try {
        const response = await searchRepository.getAllStates();
        return response;
    } catch (error) {
        console.log("Something went wrong in Search Service");
        throw error;
    }
}

const getAllDistrictsByStateId = async(data) => {
    try {
        const response = await searchRepository.getAllDistrictsByStateId(data);
        return response;
    } catch (error) {
        console.log("Something went wrong in Search Service");
        throw error;
    }
}


const getAllCentersByDistrictIdAndDate = async(data) => {
    try {
        const response = await searchRepository.getAllCentersByDistrictIdAndDate(data);
        return response;
    } catch (error) {
        console.log("Something went wrong in Search Service");
        throw error;
    }
}


module.exports = {
    getCentersByPinCode,
    getAllStates,
    getAllDistrictsByStateId,
    getAllCentersByDistrictIdAndDate
}