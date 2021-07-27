'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
         type: DataTypes.INTEGER,
         references: {
            model: 'Users', // 'users' refers to table name
            key: 'id', // 'uuid' refers to column name in users table
         },
         allowNull: false,
      },
      postId: {
         type: DataTypes.INTEGER,
         references: {
            model: 'Posts', // 'posts' refers to table name
            key: 'id', // 'id' refers to column name in posts table
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
    await queryInterface.dropTable('Comments');
  }
};