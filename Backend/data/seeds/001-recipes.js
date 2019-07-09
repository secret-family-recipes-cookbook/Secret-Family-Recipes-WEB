
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {id: 1, category:"Dinner", title: "pepperoni pizza", source: "Home Recipe", instructions: "Place toppings on pizza dough, cook and enjoy!", user_id: 1},
        {id: 2, category: "Lunch", title: "Burger", source: "Home Recipe", instructions: "Mix meat and spices, cook, place on bun and enjoy!", user_id: 2},
        {id: 3, category: "Breakfast", title: "Strawberries", source: "Home Recipe", instructions: "Wash and enjoy!", user_id: 3}
      ]);
    });
};
