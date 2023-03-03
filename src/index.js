const express = require('express');
const {PORT} = require('./config/serverConfig');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
const {User,Role} = require('./models/index');
// const setUpJobs = require('./utils/job');
const db = require('./models/index');
const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at PORT ${PORT}`);
        // setUpJobs();
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter:true});
        }

        // const u1 = await User.findByPk(1);
        // const r1 = await Role.findByPk(1);

        // u1.addRole(r1);
    });
    
}


prepareAndStartServer();

