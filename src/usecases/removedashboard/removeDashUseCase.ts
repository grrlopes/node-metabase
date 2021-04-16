import { Postgrestore } from "../../infra/store/archive/Postgrestore";
import { RemoveDash } from "../../entities/RemoveDash";
import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { IRemoveDashDTO } from "./removeDashDTO";
import { IRmDashRespprovider } from "../../infra/provider/IMetabaseprovider";

class RemoveDashUseCase {
  constructor(
    private readonly metabaseProvider: Metabaseprovider,
    private readonly postgreStore: Postgrestore
  ) {}

  async removeDashBoard(data: IRemoveDashDTO): Promise<IRmDashRespprovider> {
    const { dashIds } = new RemoveDash(data);
    const dashboard = await this.postgreStore.getDashById(dashIds.dashid);
    if (dashboard.length === 0) {
      throw { message: "DashBoard not found" };
    }
    this.metabaseProvider.metaBaseUrl = dashboard[0].server;
    const result = await this.metabaseProvider.removeMetaDashById(dashIds.dashid);
    await this.postgreStore.removeDashById(dashIds.id, dashIds.dashid);
    return result
  }
}

export { RemoveDashUseCase };
