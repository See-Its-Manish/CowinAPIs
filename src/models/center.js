'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Center extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Center.init({
    centerId: {
      type : DataTypes.INTEGER,
      allowNull : false,
    },
    reminderId : {
      type : DataTypes.INTEGER,
      allowNull : false,
    }
  }, {
    sequelize,
    modelName: 'Center',
  });
  return Center;
};