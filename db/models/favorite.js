'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Recept}) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userID' } );
      this.belongsTo(Recept, { foreignKey: 'receptID' } );
    }
  }
  Favorite.init({
    userID: DataTypes.INTEGER,
    receptID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};