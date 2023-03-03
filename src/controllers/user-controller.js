const {StatusCodes} = require('http-status-codes');
const {UserService} = require('../services/index');

const userService = new UserService();


const create = async(req,res) => {
    try {
        const data = {
            email : req.body.email,
            password : req.body.password,
            name : req.body.name
        };
        const response = await userService.create(data);
        return res.status(StatusCodes.CREATED).json({
            data : response,
            success : true,
            err : {},
            message : "Successfully created the user!"
        });
    } catch (error) {
        console.log("Something went wrong in user controller",error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            err : {error},
            message : "Not able to create the user"
        });
    }
}

const signIn = async (req,res) => {
    try {
        const data = {
            email : req.body.email,
            plainPassword : req.body.password
        };
        const response =  await userService.signin(data);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            err : {},
            message : "Successfully signed in"
        });
    } catch (error) {
        console.log("Something went wrong in user controller",error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            err : {error},
            message : "Not able to sign in"
        });
    }
}

const isAuthenticated = async (req,res) => {
    try {
        const token = req.headers['x-access-token'];
        console.log(token);
        const response = await userService.isAuthenticated(token);
        console.log("Response in Auth service!", response);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            err : {},
            message : "user is authenticated and token is valid"
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.OK).json({
            data : {},
            success : false,
            err : error,
            message : "Something went wrong!"
        });
    }
}

const isAdmin = async (req,res) => {
    try {
        const data = {
            id : req.body.id
        }
        const response =  await userService.isAdmin(data);
        return res.status(StatusCodes.OK).json({
            data : response,
            success : true,
            err : {},
            message : "Successfully fetched whether user is admin or not"
        });
    } catch (error) {
        console.log("Something went wrong in user controller!", error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            err : error,
            message : "Not able to determine whether user is admin or not!"
        })
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin
}