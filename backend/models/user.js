'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return{ ...this.get(), id: undefined}
    }
  };
  user.init({
    //to create a more complex user id for security (not knowing how many users exist)
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    first_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    last_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      //pour vérifier que le mail soit unique
      validate: {
        isEmail:true
      },
      unique: {
        args: true,
        msg: 'Adresse email déjà utilisée!'
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false
    },
    is_admin: {
      type:DataTypes.SMALLINT,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};