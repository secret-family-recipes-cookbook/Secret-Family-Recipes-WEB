const db = require('../data/dbConfig')

module.exports = {
    getAllRecipes,
    getRecipeById,
    addRecipe,
    removeRecipe,
    updateRecipe
}

function getAllRecipes() {
    return db('recipes')
    // .join('categories', 'recipes.category_id', 'categories.id')
    .select(
        'recipes.id',
        'recipes.title',
        {
            // category: 'categories.name'
        },
        'recipes.source',
        'recipes.instructions',
        'recipes.category',
        'recipes.ingredients'
    )
}

function getRecipeById(id) {
    return db('recipes')
    .where({ 'recipes.id': id })
    .first()
    // .join('categories', 'recipes.category_id', 'categories.id')
    .select(
        'recipes.id',
        'recipes.title',
        {
            // category: 'categories.name'
        },
        'recipes.source',
        'recipes.instructions',
        'recipes.category',
        'recipes.ingredients'
    )
}

async function addRecipe(recipe) {
    const [id] = await db('recipes').insert(recipe, 'id')
    return db('recipes')
    .where({ id })
    .first()
}

function removeRecipe(id) {
    return db('recipes')
    .where({ id })
    .del()
}

function updateRecipe(id, changes) {
    return db('recipes')
    .where({ id })
    .update(changes)
}

