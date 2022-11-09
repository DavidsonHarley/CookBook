'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recept extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Compound, Favorite}) {
      // define association here
      this.hasMany(Compound, {foreignKey: 'receptID'});
      this.hasMany(Favorite, {foreignKey: 'receptID'});
    }
  }
  Recept.init({
    title: DataTypes.STRING,
    time: DataTypes.INTEGER,
    instruction: DataTypes.TEXT,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recept',
  });
  return Recept;
};