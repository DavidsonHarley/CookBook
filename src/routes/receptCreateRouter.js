const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const ReceptCreate = require('../views/ReceptCreate');
const {Recept, Ingredient, Compound } = require('../../db/models');


router.get('/receptCreate', (req,res) => {
    const newUser = req.session?.newUser;
    renderTemplate(ReceptCreate, {newUser}, res);
})


router.post('/receptCreate', async (req,res) => {
    try {
        const {title, time, instruction, img, name} = req.body;
        const newRecept = await Recept.create({title, time, instruction, img});
        const newIngredient = await Ingredient.create({name});
        const newCompound = await Compound.create({receptID: newRecept.dataValues.id, ingredientID: newIngredient.dataValues.id })
        res.redirect('/favorites')

    } catch (error) {
        console.log(error);
    }

})



module.exports = router;