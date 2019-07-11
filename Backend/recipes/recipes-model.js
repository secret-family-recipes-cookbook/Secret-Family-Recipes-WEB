const db = require('../data/dbConfig')
const mappers = require('./mappers');

module.exports = {
    getAllRecipes,
    getRecipeById,
    addRecipe,
    removeRecipe,
    updateRecipe,
    getRecipeByUserId,
    findBy,
    getRecipeByName
}

function getAllRecipes() {
    return db('recipes')
    .select(
        'recipes.id',
        'recipes.title',
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
    .select(
        'recipes.id',
        'recipes.title',
        'recipes.source',
        'recipes.instructions',
        'recipes.category',
        'recipes.ingredients'
    )
}

function getRecipeByUserId(userId) {
    return db('recipes')
    .where('user_id', userId)
    // .first()
    // .select(
    //     'recipes.id',
    //     'recipes.title',
    //     'recipes.source',
    //     'recipes.instructions',
    //     'recipes.category',
    //     'recipes.ingredients'
    // )
    .then(recipes => recipes.map(recipe => mappers.recipeToBody(recipe)));
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

function findBy(filter) {
    return db('recipes').where(filter)
}

function getRecipeByName(searchString) {
    searchString = '%' + searchString + '%';
    console.log('Searching for', searchString);
    return db('recipes')
    .where('title', 'like', searchString) 
    .orWhere('category', 'like', searchString);
  }

