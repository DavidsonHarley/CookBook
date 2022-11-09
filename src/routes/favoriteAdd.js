const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { Recept, Favorite } = require('../../db/models');

router.post('/', async (req, res) => {
  const { receptID } = req.body;
  const { newUserID } = req.session;
  // console.log("idddd", receptID);
  try {
    await Favorite.create({userID: newUserID, receptID: receptID });
    res.json({ create: 'OK!' });
  } catch (error) {
    console.log('Ошибка добавления карты в базу!', error);
  }
});

module.exports = router;