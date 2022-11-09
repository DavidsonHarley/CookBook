const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const ReceptInfo = require('../views/ReceptInfo')
const {Recept, User, Compound, Ingredient } =require('../../db/models')

router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const receptInfo = await Recept.findOne({ where: { id }, raw: true});
			const ingredients = await  Recept.findAll({include: Compound});
			// const ingredients = await Compound.findAll({raw: true, where : { receptID: id }, include: Ingredient})
    	renderTemplate(ReceptInfo, { receptInfo, ingredients : ingredients .map((el) => el.get({plain: true})) }, res);
    } catch (error) {
      console.log(error);
    }
    
  });
  
module.exports = router;
