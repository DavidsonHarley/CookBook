const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Favorites = require('../views/Favorites');
const { Recept, Favorite, User } = require('../../db/models');

router.get('/', async (req,res) => {
  const { newUser, newUserID  } = req.session;
  const newRecept = await Favorite.findAll({ include:Recept, where: {userID: newUserID} });
  renderTemplate(Favorites, { newUser, newUserID,newRecept:newRecept.map((el) => el.get({plain:true})) } || null, res);
})

router.delete('/', async (req, res) => {
  try {
    const { id } = req.body;
    await Favorite.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});


///asdasd///
module.exports = router;
