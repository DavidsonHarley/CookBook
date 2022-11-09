'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Recepts', 
     [{
      title: 'Картошка с салом в фольге, запеченная в духовке',
      time: ' 60мин',
      instruction: 'Шаг 1: Подготовьте картошку для запекания. Вымойте клубни очень тщательно с помощью щетки. Очищать картошку не следует. На каждом клубне сделайте поперечные надрезы через 6–7 мм друг от друга, не прорезая до конца 1 см.\n Шаг 2: Чеснок очистите и пропустите через пресс. Налейте в маленькую мисочку подсолнечное масло. Добавьте душицу, паприку и чайную ложку соли. Поперчите и перемешайте. \n Шаг 3: Разложите картошку по листочкам фольги (размер должен позволять завернуть каждый клубень полностью). Смажьте с помощью кисточки получившейся масляной смесью. \n Шаг 4: Нарежьте сало очень тонкими ломтиками. Распределите их по надрезам. Выложите на противень и запекайте 50 минут при 200C. Затем разверните клубни и запеките под грилем до румяной корочки (около 5 минут). \n Шаг 5: Если ваша духовка не оборудована грилем, просто увеличьте нагрев до максимума и готовьте картошку еще 5–7 минут. На стол ее можно подать непосредственно в фольге. \n',
      img: 'https://www.gastronom.ru/binfiles/images/20220909/b384b600.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
     }], 
     
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
