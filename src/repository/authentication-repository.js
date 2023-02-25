const axios = require('axios');
class AuthenticationRepository {

    async generateOTPByNumber({mobile}) {
       try {
            const response = await axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',{
                "mobile" : mobile
            });
            console.log(response.data);
            return response;
       } catch (error) {
            console.log("Something went wrong in authentication repository");
            throw error;
       }
    }

    async confirmOTP({otp,txnId}){
        try {
            const response = await axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP',{
                "otp" : otp,
                "txnId" : txnId
            });
            console.log(response.data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the authentication Repository");
            throw error;
        }
    }

    async fetchVaccinationCertfication({beneficiary_reference_id, token}){
        try {
            const response = await axios.get("https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download",{
                params : {
                    "beneficiary_reference_id" : beneficiary_reference_id
                },
                headers: { Authorization: token },
                responseType : "arraybuffer",
                responseEncoding : "binary"
            });
            console.log(typeof response);
            return response;
        } catch (error) {
            console.log("Something went wrong in Authentication repository");
            throw error;
        }
    }

}

module.exports = AuthenticationRepository;