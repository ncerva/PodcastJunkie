const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stash extends Model {}

Stash.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title_original: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
    },
    episodes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'stash',
  }
);

module.exports = Stash;
