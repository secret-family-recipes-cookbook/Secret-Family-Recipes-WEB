
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        {name: "pepperoni", quantity: "1 cup", recipe_id: 1},
        {name: "hamber meat", quantity: "1 pound", recipe_id: 2},
        {name: "Strawberries", quantity: "1 cup", recipe_id: 2}
      ]);
    });
};
