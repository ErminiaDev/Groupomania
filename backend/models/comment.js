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
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};