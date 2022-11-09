'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Compounds', [
      {
        receptID: 2,
        ingredientID:9,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        receptID: 2,
        ingredientID:10,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        receptID: 2,
        ingredientID:11,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        receptID: 2,
        ingredientID: 12,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        receptID: 2,
        ingredientID: 13,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        receptID: 2,
        ingredientID: 14,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        receptID: 2,
        ingredientID: 15,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        receptID: 2,
        ingredientID: 16,
        createdAt: new Date(),
         updatedAt: new Date(),
      }
      

    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
