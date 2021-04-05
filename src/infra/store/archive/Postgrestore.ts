import { knex } from "knex";
const { v4: uuidv4 } = require('uuid');
import { IDashboardStore } from "../IPostgrestore";
const knexfile = require("../../../../knexfile.ts")[process.env.KNEX_ENV || "test"];

class Postgrestore implements IDashboardStore {
  private db = knex(knexfile);

  async save(dash: any): Promise<any> {
    return await this.db("dashboard").insert({
      id: uuidv4(),
      actor_id: uuidv4(),
      account_id: uuidv4(),
      dashboard_id: dash.id,
      created_at: new Date()
    }).returning("*");
  }
}

export { Postgrestore };
