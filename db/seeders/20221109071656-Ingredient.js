'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Ingredients', 
      [
        {
       name: 'картофель – 6 клубней весом около 150 г',
       createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'чеснок – 2 зубчика',
        createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        name: 'подсолнечное масло – 2 ст. л.',
        createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        name: 'сушеная душица – 1 ч. л.',
        createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        name: 'молотая копченая паприка – 1 ч. л.',
        createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        name: 'сало – 100 г',
        createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        name: 'соль по вкусу',
        createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        name: 'свежемолотый черный перец по вкусу',
        createdAt: new Date(),
         updatedAt: new Date(),
       }
      

    ], 
      
      {});
    
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
