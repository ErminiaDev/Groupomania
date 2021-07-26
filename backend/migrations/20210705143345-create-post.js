'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      title: {
        type:DataTypes.STRING,
        allowNull:false 
      },
      category: {
        type: DataTypes.STRING,
        allowNull:false
      },
      text: {
        type:DataTypes.TEXT,
        allowNull:false 
      },
      userId: {
         type: DataTypes.UUID,
         references: {
            model: 'Users', // 'users' refers to table name
            key: 'uuid', // 'uuid' refers to column name in users table
         },
         allowNull: false,
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
    await queryInterface.dropTable('Posts');
  }
};