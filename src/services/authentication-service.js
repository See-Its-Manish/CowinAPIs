const {AuthenticationRepository} = require('../repository/index');
const {createHash} = require('crypto');
const authenticationRepository = new AuthenticationRepository();

const generateOTP = async (data) => {
    try {
        const response = await authenticationRepository.generateOTPByNumber(data);
        return response;
    } catch (error) {
        console.log("Something went wrong in Authentication Service");
        throw error;
    }
}

const confirmOTP = async (data) => {
    try {
        const otp = data.otp;
        const otpHash = createHash('sha256').update(otp).digest('hex');
        data = {
            "otp" : otpHash,
            "txnId" : data["txnId"]
        };
        const response = await authenticationRepository.confirmOTP(data);
        return response;
    } catch (error) {
        console.log("Soething went wrong in Authentication Service");
        throw error;
    }
}

const fetchVaccinationCertfication = async (data) => {
    try {
        const response = await authenticationRepository.fetchVaccinationCertfication(data);
        return response;
    } catch (error) {
        console.log("Something went wrong in authentication service");
        throw error;
    }
}

module.exports = {
    generateOTP,
    confirmOTP,
    fetchVaccinationCertfication
}