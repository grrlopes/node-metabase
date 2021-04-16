import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("dashboard", (table) => {
    table.string("server").notNullable().alter();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("dashboard", (table) => {
    table.string("server").nullable().alter();
  });
}
