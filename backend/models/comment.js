'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }){
      this.belongsTo( User, { foreignKey : 'userId'} )
    };

    static associate({ Post }){
      this.belongsTo( Post, { foreignKey : 'postId'} )
    };

    toJSON() {
      return { ...this.get(), id: undefined, userId: undefined, postId: undefined }
    }

  };
  Comment.init({
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
          model: 'Users', // 'Users' refers to table name
          key: 'id', // 'id' refers to column name in users table
       },
       allowNull: false,
    },
    postId: {
       type: DataTypes.INTEGER,
       references: {
          model: 'Posts', // 'Posts' refers to table name
          key: 'id', // 'id' refers to column name in posts table
       },
       allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};