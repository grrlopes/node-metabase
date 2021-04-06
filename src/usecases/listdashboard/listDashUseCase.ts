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
    const dashId = await this.postgreStore.getDashByIds(
      data.account_id,
      data.actor_id
    );
    const id_ = dashId[0].dashboard_id
    return await this.metabaseProvider.findMetaDashById(id_);
  }
}

export { ListDashUseCase };
