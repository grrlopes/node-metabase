import { knex } from "knex";
import { v4 as uuidv4 } from "uuid";
import { IDashboardStore, IDashidStore, IAccountStore } from "../IPostgrestore";
const knexfile = require("../../../../knexfile.ts")[process.env.KNEX_ENV ?? "test"];

class Postgrestore implements IDashboardStore {
  private readonly db = knex(knexfile);

  async save(dash: any, account: IAccountStore): Promise<any> {
    return await this.db("dashboard").insert({
      id: uuidv4(),
      actor_id: uuidv4(),
      account_id: uuidv4(),
      dashboard_id: dash.id,
      server: account.server,
      created_at: new Date(),
      description: account.description,
      name: account.name,
    }).returning("*");
  }

  async getDashByIds(accountId: string, actorId: string, ): Promise<IDashidStore[]> {
    return await this.db("dashboard").select("dashboard_id")
      .where({actor_id: actorId, account_id: accountId})
  }
}

export { Postgrestore };
