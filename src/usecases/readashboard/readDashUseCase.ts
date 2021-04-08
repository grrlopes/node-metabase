import { Postgrestore } from "../../infra/store/archive/Postgrestore";
import { Dashid } from "../../entities/Dashid";
import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { IReadDashDTO } from "./readDashDTO";

class ReadDashUseCase {
  constructor(
    private readonly metabaseProvider: Metabaseprovider,
    private readonly postgreStore: Postgrestore
  ) {}

  async readDashBoard(data: IReadDashDTO): Promise<any> {
    const _data = new Dashid(data);
    const dashboard = await this.postgreStore.getDashById(_data.dashId);
    this.metabaseProvider.metaBaseUrl = dashboard[0].server;
    return await this.metabaseProvider.findMetaDashById(_data.dashId);
  }

}

export { ReadDashUseCase };
