'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    
    static associate (models) {
      models.Comment.belongsTo(models.User,{
        foreignKey: {
          allowNull: false
        }, onDelete: 'CASCADE',
      }),
      models.Comment.belongsTo(models.Post, {
        foreignKey: {
          allowNull: false
        }, onDelete: 'CASCADE',
      })
    }

    toJSON() {
      return { ...this.get(), /* id: undefined, */ userId: undefined, postId: undefined }
    }

  };
  Comment.init({
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
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    /* userId: {
       type: DataTypes.INTEGER,
       references: {
          model: 'Users', // 'Users' refers to table name
          key: 'id', // 'uuid' refers to column name in users table
       },
       allowNull: false,
    },
    postId: {
       type: DataTypes.INTEGER,
       references: {
          model: 'Posts', // 'Posts' refers to table name
          key: 'id', // 'uuid' refers to column name in posts table
       },
       allowNull: false,
    } */
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};