'use strict';
module.exports = {
  up: async (queryInterface, Datatypes) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER
      },
      uuid: { //to create a more complex user id for security (not knowing how many users exist)
        type: Datatypes.UUID,
        defaultValue: Datatypes.UUIDV4
      },
      first_name: {
        type:Datatypes.STRING,
        allowNull:false
      },
      last_name: {
        type:Datatypes.STRING,
        allowNull:false
      },
      email: {
        type:Datatypes.STRING,
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
        type:Datatypes.STRING,
        allowNull:false
      },
      is_admin: {
        type:Datatypes.SMALLINT,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Datatypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Datatypes.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};