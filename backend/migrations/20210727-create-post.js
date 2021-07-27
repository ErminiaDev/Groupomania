'use strict';

module.exports = {
  up: async (queryInterface, Datatypes) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER
      },
      UserId: {
        allowNull: false,
        type: Datatypes.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        },     
      },
      uuid: {
        type: Datatypes.UUID,
        defaultValue: Datatypes.UUIDV4
      },
      title: {
        type:Datatypes.STRING,
        allowNull:false 
      },
      category: {
        type: Datatypes.STRING,
        allowNull:false
      },
      text: {
        type:Datatypes.TEXT,
        allowNull:false 
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
    await queryInterface.dropTable('Posts');
  }
};