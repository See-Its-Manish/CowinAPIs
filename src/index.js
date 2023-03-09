const express = require('express');
const {PORT} = require('./config/serverConfig');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
const {User,Role,Preference} = require('./models/index');
const setUpJobs = require('./utils/job');
const db = require('./models/index');
const {Center} = require('./models/index');
const getDates = require('./utils/dates-between-two-dates');
const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at PORT ${PORT}`);
        setUpJobs();
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter:true});
        }

        // const dates = getDates(new Date(), new Date().addDays(4));
        
        // dates.forEach(async (date) => {
        //     const centers = await Center.findAll({
        //         where: {
        //             date: date
        //         }
        //     });
        //     console.log(`For date ${date}`);
        //     if(centers[0]!=undefined) {
        //         console.log(centers[0]['dataValues']['id']);
        //     }
         
        // });

       
        // await Center.create({centerId : 580267, reminderId : 1, date : new Date('2023-03-10')});
        
    });
    
}


prepareAndStartServer();

