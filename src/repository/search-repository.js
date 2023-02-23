const axios = require('axios'); 
class SearchRepository {


    async getAllCentersByPincodeAndDate({pincode, date}) {
        try {
            const response = await axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin',
                {
                    params : {
                        "pincode" : pincode,
                        "date" : date
                    }
                }
            );
            // console.log(response);
            return response;
        } catch (error) {
            console.log("Something went wrong in search repo");
            throw error;
        }
    }

}

module.exports = SearchRepository