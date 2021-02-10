
exports.up = function(knex) {
    return knex.schema
    .createTable('inventories', (table) => {
        table.increments();
        table.text('itemid');
        table.integer('value');
        table.integer('quantity');
    })
    .createTable('items', (table) => {
        table.increments();
        table.text('itemid');
        table.text('name');
        table.text('description')
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('items')
        .dropTable('inventories');
};
