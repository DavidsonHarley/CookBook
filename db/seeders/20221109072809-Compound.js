'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Compounds', [
      {
        receptID: 5,
        ingredientID:34,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        receptID: 5,
        ingredientID:35,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        receptID: 5,
        ingredientID:36,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        receptID: 5,
        ingredientID: 37,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        receptID: 5,
        ingredientID: 38,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        receptID: 5,
        ingredientID: 39,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        receptID: 5,
        ingredientID: 40,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        receptID: 5,
        ingredientID: 41,
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
