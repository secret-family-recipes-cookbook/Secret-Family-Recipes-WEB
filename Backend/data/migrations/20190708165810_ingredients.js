
exports.up = function (knex, Promise) {
    return knex.schema.createTable("ingredients", tbl => {
        tbl.increments();

        tbl
            .string("name")
            .notNullable()
        
        tbl
            .string("quantity")
            .notNullable()
        
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        
        tbl.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
