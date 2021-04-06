import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("dashboard", (table) => {
    table.string("description").nullable();
    table.string("name").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("dashboard", (table) => {
    table.dropColumns("description", "name");
  });
}
