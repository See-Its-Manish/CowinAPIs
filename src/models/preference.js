'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Preference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Center,{
          as : 'centers',
          foreignKey : 'preferenceId'
      });
    }
  }
  Preference.init({
    pinode: {
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
    modelName: 'Preference',
  });
  return Preference;
};