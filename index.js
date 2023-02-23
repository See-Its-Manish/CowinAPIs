const bodyParser = require('body-parser');
const express = require('express');
const {PORT} = require('./config/serverConfig');
const app = express();
const bodyParser = require('body-parser');


const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.listen(PORT, () => {
        console.log(`Server started at PORT ${PORT}`);
    });
    
}


prepareAndStartServer();

