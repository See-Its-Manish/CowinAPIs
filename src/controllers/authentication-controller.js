const {StatusCodes}  = require('http-status-codes');
const {AuthenticationService} = require('../services/index');
const fs = require('fs');

const generateOTP = async (req,res) => {
    try {
        const response = await AuthenticationService.generateOTP(req.body);
        return res.status(StatusCodes.OK).json({
            data : response.data,
            success : true,
            err : {},
            message : "Successfully sent the OTP"
        });
    } catch (error) {
        console.log("Something went wrong in authentication controller", error);
        return res.status(500).json({
            data : {},
            success : false,
            err : error.data,
            message : "Not able to send the OTP"
        });

    }
}

const confirmOTP = async (req,res) => {
    try {
        const response = await AuthenticationService.confirmOTP(req.body);
        return res.status(StatusCodes.OK).json({
            data : response.data,
            success : true,
            err : {},
            message : "Successfully confirmed OTP and sent the token"
        });
    } catch (error) {
        console.log("Something went wrong in authentication controller", error);
        return res.status(500).json({
            data : {},
            success : false,
            err : error,
            message : "Not able to confirm the OTP"
        });

    }
}

const fetchVaccinationCertfication = async (req,res) => {
    try {
        const obj = {
            beneficiary_reference_id :  req.params.beneficiary_reference_id,
            token : req.rawHeaders[1]
        };
        const response = await AuthenticationService.fetchVaccinationCertfication(obj);
        let pdfString = Buffer.from(response.data).toString("base64");
        fs.writeFile(`${req.params.beneficiary_reference_id}.pdf`, pdfString, 'base64', function(err) {
            console.log("Not able to convert into pdf");
            throw err;
        });
        return res.status(StatusCodes.OK).json({
            data : pdfString,
            success : true,
            err : {},
            message : "Successfully fetched the certificate"
        });
    } catch (error) {
        console.log("Something went wrong in authentication controller", error.data);
        return res.status(500).json({
            data : {},
            success : false,
            err : error,
            message : "Not able to fetched the certificate"
        });

    }
}


module.exports = {
    confirmOTP,
    generateOTP,
    fetchVaccinationCertfication
}