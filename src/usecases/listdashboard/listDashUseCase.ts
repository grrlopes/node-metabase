import { Listdashboard } from "../../entities/Listdashboard";
import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { Postgrestore } from "../../infra/store/archive/Postgrestore";
import { IListIds } from "./listDashDTO";

class ListDashUseCase {
  constructor(
    private readonly postgreStore: Postgrestore,
    private readonly metabaseProvider: Metabaseprovider
  ) {}

  async listDashBoard(_data: IListIds): Promise<any> {
    const data = new Listdashboard(_data);
    const dashboard = await this.postgreStore.getDashByIds(
      data.account_id,
      data.actor_id
    );

    if (dashboard.length === 0) {
      throw new Error("DashBoard not found");
    }

    this.metabaseProvider.metaBaseUrl = dashboard[0].server;
    const id_ = dashboard[0].dashboard_id;
    return await this.metabaseProvider.findMetaDashById(id_);
  }
}

export { ListDashUseCase };
