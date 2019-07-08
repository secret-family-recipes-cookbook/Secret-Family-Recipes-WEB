
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {id: 1, title: "pepperoni pizza", source: "Home Recipe", instructions: "Place toppings on pizza dough, cook and enjoy!", user_id: 1},
        {id: 2, title: "Burger", source: "Home Recipe", instructions: "Mix meat and spices, cook, place on bun and enjoy!", user_id: 2},
        {id: 3, title: "Strawberries", source: "Home Recipe", instructions: "Wash and enjoy!", user_id: 3}
      ]);
    });
};
