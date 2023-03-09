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
            return response.data;
        } catch (error) {
            console.log("Something went wrong in search repo");
            throw error;
        }
    }

    async getAllStates() {
        try {
            const response = await axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states');
            return response.data.states;
        } catch (error) {
            console.log("Something went wrong in search repository");
            throw error;
        }
    }

    async getAllDistrictsByStateId({stateId}) {
        try {
            console.log(stateId);
            const response = await axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`);
            return response.data.districts;
        } catch (error) {
            console.log("Something went wrong in search repository");
            throw error;
        }
    }

    async getAllCentersByDistrictIdAndDate({districtId, date}) {
        try {
            const response = await axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict',
            {
                params : {
                    "district_id" : districtId,
                    "date" : date 
                }
            });
            return response.data;
        } catch (error) {
            console.log("Something went wrong in search repository");
            throw error;
        }
    }

}

module.exports = SearchRepository