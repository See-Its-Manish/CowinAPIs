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

module.exports = {
    getCentersByPinCode,
}