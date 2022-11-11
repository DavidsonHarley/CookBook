const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');
const {Recept, Compound, Ingredient , Favorite } =require('../../db/models');


router.get('/', async (req, res) => {
  try {
    const receptHome = await  Recept.findAll({include: Compound});
    const newUser= req.session?.newUser;
    const {newUserID} = req.session

    const receptFavorite = newUserID
    ? await await Favorite.findAll({ where: {userID: newUserID} , raw: true})
    : null;
    
  renderTemplate(Home, { newUser,receptFavorite, newUserID, receptHome: receptHome.map((el) => el.get({plain: true})) }, res);
  } catch (error) {
    console.log(error);
  }
  
});

router.delete('/', async (req,res) => {
  try {
    const {id} = req.body;
    const delRecept = await Recept.destroy({ where: {id}});
    res.sendStatus(200)
  } catch (error) {
    console.log(error);
  }
})



module.exports = router;