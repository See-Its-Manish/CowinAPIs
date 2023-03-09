'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reminders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pincode: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      districtId: {
        type: Sequelize.INTEGER,
        allowNull : false,
      },
      feetype: {
        type: Sequelize.STRING,
        allowNull : false,
        values : ['ALL', 'FREE', 'PAID'],
        defaultValue : 'ALL'
      },
      vaccinetype: {
        type: Sequelize.STRING,
        values : ['ALL', 'COVISHIELD', 'COVAXIN', 'SPUTNIK V', 'CORBEVAX'],
        defaultValue : 'ALL',
        allowNull : false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull : false,
        validate : {
          min: 1,
          max: 130,
        }
      },
      dose: {
        type: Sequelize.STRING,
        allowNull : false,
        values : ['ALL', 'DOSE 1', 'DOSE 2', 'BOOSTER DOSE'],
        defaultValue : 'ALL'
      },
      startingDate: {
        type: Sequelize.DATEONLY,
        allowNull : false,
      },
      endingDate: {
        type: Sequelize.DATEONLY,
        allowNull : false,
      },
      email : {
        type : Sequelize.STRING,
        allowNull : false,
        isEmail  : true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reminders');
  }
};