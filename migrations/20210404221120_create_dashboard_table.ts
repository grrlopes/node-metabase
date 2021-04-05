import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('dashboard', table => {
    table.uuid("id").primary();
    table.uuid("actor_id").notNullable();
    table.uuid("account_id").notNullable();
    table.integer("dashboard_id").notNullable();
    table.string("server").nullable();
    table.timestamp("created_at").notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("dashboard")
}

