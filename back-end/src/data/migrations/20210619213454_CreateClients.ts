import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('clients', (table) => {
    table.uuid('id').primary();
    table.string('name', 50).notNullable();
    table.string('birth', 20).notNullable();
    table.string('phone', 20).notNullable();
    table.string('email', 100).notNullable().unique();
    table.string('password', 255).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('clients');
}

exports.config = { transaction: true };