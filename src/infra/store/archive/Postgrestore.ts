import { knex } from "knex";
import { v4 as uuidv4 } from "uuid";
import { IDashboardStore, IDashidStore, IAccountStore } from "../IPostgrestore";
const knexfile = require("../../../../knexfile.ts")[process.env.KNEX_ENV ?? "test"];

class Postgrestore implements IDashboardStore {
  private readonly db = knex(knexfile);

  async save(dash: any, account: IAccountStore): Promise<any> {
    return await this.db("dashboard").insert({
      id: uuidv4(),
      actor_id: account.actor_id,
      account_id: account.actor_id,
      dashboard_id: dash.id,
      server: account.server,
      created_at: new Date(),
      description: account.description,
      name: account.name,
    }).returning("*");
  }

  async getDashByIds(accountId: string, actorId: string, ): Promise<IDashidStore[]> {
    return await this.db("dashboard").select(["dashboard_id", "server"])
      .where({actor_id: actorId, account_id: accountId})
  }

  async getDashById(dashId: number): Promise<IDashidStore[]> {
    return await this.db("dashboard").select("server")
    .where({dashboard_id: dashId})
  }

}

export { Postgrestore };
