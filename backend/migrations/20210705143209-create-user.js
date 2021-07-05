'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      uuid: { //to create a more complex user id for security (not knowing how many users exist)
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
        defaultValue: 0
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};