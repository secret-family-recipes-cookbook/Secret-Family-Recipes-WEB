module.exports = {
    recipeToBody
};

function intToBoolean(int) {
    return int === 1 ? true : false;
  }

function recipeToBody(recipe) {
    return {
      ...recipe,
      completed: intToBoolean(recipe.completed),
    };
  }