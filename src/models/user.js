'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
const {SALT} = require('../config/serverConfig');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role,{
        through : 'User_Roles',
      });

      this.hasMany(models.Preference,{
        as : 'preferences',
        foreignKey : 'userId',
      });
    }
  }
  User.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      isEmail : true,
      unique : true
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false
    },
    reminders : {
      type : DataTypes.INTEGER,
      defaultValue : 0,
      allowNull : false,
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) => {
    const encryptedPassword = bcrypt.hashSync(user.password,SALT);
    user.password = encryptedPassword;
  });
  return User;
};