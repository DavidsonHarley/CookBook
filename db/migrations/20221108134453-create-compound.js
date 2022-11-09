'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Compounds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      receptID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Recepts',
          key: 'id',
        },
        onDelete: 'cascade',
        allowNull: false,
      },
      ingredientID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ingredients',
          key: 'id',
        },
        onDelete: 'cascade',
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Compounds');
  }
};