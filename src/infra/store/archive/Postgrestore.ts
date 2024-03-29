import { IDashboardStore, IDashidStore, IAccountStore } from "../IPostgrestore";
import { Postgresingle } from "./Postgresingle";

class Postgrestore implements IDashboardStore {
  private readonly db = Postgresingle.getInstance.getStore();
  constructor(){}
  async removeDashById(id: string, dashId: number): Promise<void> {
    await this.db("dashboard").where({ id: id, dashboard_id: dashId }).del()
  };

  async save(dash: any, account: IAccountStore): Promise<any> {
    return await this.db("dashboard").insert({
      id: account.id,
      actor_id: account.actor_id,
      account_id: account.account_id,
      dashboard_id: dash.id,
      server: account.server,
      created_at: dash.created_at,
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
