/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("name", (table) => {
    table.increments("id").primary();
    table.string("name", 50).notNullable();
    table.integer("age").defaultTo(14);
    table.text("description").defaultTo(" ");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("name");
};
