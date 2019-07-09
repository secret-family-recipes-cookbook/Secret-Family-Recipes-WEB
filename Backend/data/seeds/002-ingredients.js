
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        {id: 1, name: "pepperoni", quantity: "1 cup", recipe_id: 1},
        {id: 2, name: "hamber meat", quantity: "1 pound", recipe_id: 2},
        {id: 3, name: "Strawberries", quantity: "1 cup", recipe_id: 2}
      ]);
    });
};
