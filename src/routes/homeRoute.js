const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');
const {Recept, Compound, Ingredient } =require('../../db/models');


router.get('/', async (req, res) => {
  try {
    const receptHome = await  Recept.findAll({include: Compound});
    
    const newUser = req.session?.newUser;
  renderTemplate(Home, { newUser, receptHome: receptHome.map((el) => el.get({plain: true})) }, res);
  } catch (error) {
    console.log(error);
  }
  
});



module.exports = router;