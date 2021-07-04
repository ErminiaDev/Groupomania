'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
         type: DataTypes.INTEGER,
         references: {
            model: 'users', // 'users' refers to table name
            key: 'id', // 'id' refers to column name in users table
         },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('posts');
  }
};