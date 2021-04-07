import { Dashid } from "../../entities/Dashid";
import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { IRemoveDashDTO } from "./removeDashDTO";

class RemoveDashUseCase {
  constructor(private readonly metabaseProvider: Metabaseprovider) {}

  async removeDashBoard(data: IRemoveDashDTO): Promise<any> {
    const _data = new Dashid(data);
    return await this.metabaseProvider.removeMetaDashById(_data.dashId);
  }
}

export { RemoveDashUseCase };
