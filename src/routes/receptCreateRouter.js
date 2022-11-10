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
        const newName = name.split(',');
        const newNAmeFor =  newName.map(async(el)  => {
            const newIngredient =  await Ingredient.create({name: el});
            const newCompound = await Compound.create({receptID: newRecept.dataValues.id, ingredientID: newIngredient.dataValues.id })
        })
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }

})



module.exports = router;