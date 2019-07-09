
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: "user1", password: "test1"},
        {id: 2, username: "user2", password: "test2"},
        {id: 3, username: "user3",password: "test3"}
      ]);
    });
};
