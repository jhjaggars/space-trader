
exports.up = function(knex) {
    return knex.schema.createTable('merchants', (table) => {
        table.increments();
        table.text('name');
        table.text('description');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('merchants');
};
