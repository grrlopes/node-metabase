import { Dashid } from "../../entities/Dashid";
import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { IReadDashDTO } from "./readDashDTO";

class ReadDashUseCase {
  constructor(private readonly metabaseProvider: Metabaseprovider) {}

  async readDashBoard(data: IReadDashDTO): Promise<any> {
    const _data = new Dashid(data)
    return await this.metabaseProvider.findMetaDashById(_data.dashId);
  }

}

export { ReadDashUseCase };
