import { Postgrestore } from "../../infra/store/archive/Postgrestore";
import { Dashid } from "../../entities/Dashid";
import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { IRemoveDashDTO } from "./removeDashDTO";

class RemoveDashUseCase {
  constructor(
    private readonly metabaseProvider: Metabaseprovider,
    private readonly postgreStore: Postgrestore
  ) {}

  async removeDashBoard(data: IRemoveDashDTO): Promise<any> {
    const _data = new Dashid(data);
    const dashboard = await this.postgreStore.getDashById(_data.dashId);
    this.metabaseProvider.metaBaseUrl = dashboard[0].server
    return await this.metabaseProvider.removeMetaDashById(_data.dashId);
  }
}

export { RemoveDashUseCase };
