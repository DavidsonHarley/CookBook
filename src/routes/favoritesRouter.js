const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Favorites = require('../views/Favorites');
const { Recept, Favorite } = require('../../db/models');

router.get('/', async (req,res) => {
  const { newUser, newUserID } = req.session;
  const recept = await Favorite.findAll({raw: true, where : { userID: newUserID }, include: Recept})
  console.log(recept);
  renderTemplate(Favorites, { newUser, newUserID } || null, res);
})

// router.post('/', async (req, res) => {
//   const { receptID } = req.body;
//   const { newUserID } = req.session;
//   try {
//     await Favorite.create({userID: newUserID, receptID: receptID });
//     res.json({ create: 'OK!' });
//   } catch (error) {
//     console.log('Ошибка добавления карты в базу!', error);
//   }
// });

module.exports = router;
