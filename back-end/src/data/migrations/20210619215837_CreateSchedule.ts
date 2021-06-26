import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('schedules', (table) => {
    table.uuid('id').primary();
    table.string('date', 20).notNullable();
    table.string('time', 20).notNullable();
    table.uuid('employee_id').references('id').inTable('employees').notNullable();
    table.uuid('client_id').references('id').inTable('clients').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('schedules');
}

exports.config = { transaction: true };
