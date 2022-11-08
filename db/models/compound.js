'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compound extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Recept, Ingredient }) {
      // define association here
      this.belongsTo(Recept, { foreignKey: 'receptID' } );
      this.hasMany(Ingredient, { foreignKey: 'ingredientID' } );
    }
  }
  Compound.init({
    receptID: DataTypes.INTEGER,
    ingredientID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Compound',
  });
  return Compound;
};