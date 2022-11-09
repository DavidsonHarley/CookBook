'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Recepts', 
     [
      {
      title: 'Жареные кальмары с пореем и лимоном',
      time: ' 60',
      instruction: 'Если кальмары целой тушкой, удалите изнутри хитиновую пластину и постарайтесь снять все пленки. Нарежьте кальмары кольцами, сложите в жаропрочную миску. Вскипятите полный чайник и залейте кальмары. Оставьте на 3–4 мин., затем откиньте на дуршлаг.',
      img: 'https://www.gastronom.ru/binfiles/images/20220414/be832536.jpg',
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
