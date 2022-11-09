const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');
const {Recept} =require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const receptHome = await  Recept.findAll({ raw: true});
    // console.log(receptHome);
    const newUser = req.session?.newUser;
  renderTemplate(Home, { newUser, receptHome }, res);
  } catch (error) {
    console.log(error);
  }
  
});



module.exports = router;