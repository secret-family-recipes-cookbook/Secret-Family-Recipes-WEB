
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {title: "pepperoni pizza", source: "Home Recipe", instructions: "Place toppings on pizza dough, cook and enjoy!", category:"Dinner", user_id: 1},
        {title: "Burger", source: "Home Recipe", instructions: "Mix meat and spices, cook, place on bun and enjoy!",  category: "Lunch", user_id: 2},
        {title: "Strawberries", source: "Home Recipe", instructions: "Wash and enjoy!", category: "Breakfast", user_id: 3}
      ]);
    });
};
