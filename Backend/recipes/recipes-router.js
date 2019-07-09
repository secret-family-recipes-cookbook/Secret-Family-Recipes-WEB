const router = require('express').Router();

const Recipes = require('./recipes-model.js')

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipes.getAllRecipes()
        res.status(200).json(recipes)
      } catch (error) {
        res.status(500).json({
          message: 'An error occured while trying to retrieve recipes'
        })
      }
    })

    router.get('/:id', async (req, res) => {
        try {
            const recipe = await Recipes.getRecipeById(req.params.id)
            if (recipe) {
                res.status(200).json(recipe)
            } else {
                res.status(404).json({ message: 'Cannot find requested recipe' })
            }
        } catch (error) {
            res.status(500).json(error)
        }
    })

    router.post('/', async (req, res) => {
        const recipe = req.body;
        if (recipe.name) {
            try {
                const addedRec = await Recipes.addRecipe(recipe)
                res.status(201).json(addedRec)
            } catch (error) {
                res.status(500).json({ message: 'Error adding recipe' })
            }
        } else {
            res.status(400).json({ message: 'Error. Provide name for recipe'})
        }
    })

    router.delete('/:id', async (req, res) => {
        try {
            const count = await Recipes.removeRecipe(req.params.id)
            if (count > 0) {
                res.status(204).end()
            } else {
                res.status(404).json({ message: 'No recipe found'})
            }
        } catch (error) {
            res.status(500).json({ message: 'There was an error while attempting to remove that recipe'})
        }
    })

    router.put('/:id', async (req, res) => {
        const changes = req.body;
        if (changes.name) {
            try {
                const updated = await Recipes.updateRecipe(req.params.id, changes)
                if (updated) {
                    res.status(200).json(updated)
                } else {
                    res.status(404).json({ message: 'That recipe does not exist'})
                }
            } catch (error) {
                res.status(500).json({ message: 'There was an error while trying to update the recipe'})
            }
        } else {
            res.status(400).json({ message: 'Name of recipe is required'})
        }
    })

    module.exports = router;