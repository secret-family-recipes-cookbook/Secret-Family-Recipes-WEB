
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "user1", password: "test1"},
        {username: "user2", password: "test2"},
        {username: "user3",password: "test3"}
      ]);
    });
};
