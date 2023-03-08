'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reminder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reminder.init({
    pincode: {
      type: DataTypes.INTEGER,
      allowNull : false
    },
    districtId: {
      type: DataTypes.INTEGER,
      allowNull : false
    },
    feetype: {
      type : DataTypes.STRING,
      allowNull : false,
      values : ['ALL', 'FREE', 'PAID'],
      defaultValue : 'ALL'
    },
    vaccinetype: {
      type : DataTypes.STRING,
      allowNull : false,
      values : ['ALL', 'COVISHIELD', 'COVAXIN', 'SPUTNIK V', 'CORBEVAX'],
      defaultValue : 'ALL',
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull : false,
      validate : {
        min: 1,
        max: 130,
      }
    },
    dose: {
      type : DataTypes.STRING,
      allowNull : false,
      values : ['ALL', 'DOSE 1', 'DOSE 2', 'BOOSTER DOSE'],
      defaultValue : 'ALL'
    },
    email : {
      type : DataTypes.STRING,
      allowNull : false,
      isEmail  : true
    },
    startingDate:{
      type : DataTypes.DATE,
      allowNull : false
    },
    endingDate: {
      type : DataTypes.DATE,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'Reminder',
  });
  return Reminder;
};