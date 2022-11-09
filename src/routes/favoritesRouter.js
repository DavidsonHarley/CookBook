const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Favorites = require('../views/Favorites');
const { Recept, Favorite, User } = require('../../db/models');

router.get('/', async (req,res) => {
  const { newUser, newUserID } = req.session;
  const newRecept = await Favorite.findAll({ include:Recept })
  console.log('132123123', newRecept);
  renderTemplate(Favorites, { newUser, newUserID,newRecept:newRecept.map((el) => el.get({plain:true})) } || null, res);
})



module.exports = router;
