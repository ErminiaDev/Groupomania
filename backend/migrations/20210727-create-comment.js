'use strict';
module.exports = {
  up: async (queryInterface, Datatypes) => {
    await queryInterface.createTable('Comments', {
      id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      uuid: {
        type: Datatypes.UUID,
        defaultValue: Datatypes.UUIDV4
      },
      text: {
        type: Datatypes.STRING,
        allowNull: false
      },
      PostId: {
        allowNull: false,
        type: Datatypes.INTEGER,
        references: {
          model: 'Post',
          key: 'id'
        },
      },
      UserId: {
        allowNull: false,
        type: Datatypes.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        },
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
    await queryInterface.dropTable('Comments');
  }
};