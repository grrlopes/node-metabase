import { Postgrestore } from "../../infra/store/archive/Postgrestore";
import { sign } from "jsonwebtoken";
import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { IViewDashDTO } from "./viewDashDTO";

class ViewDashUseCase {
  private key: any;
  constructor(
    private readonly metabaseProvider: Metabaseprovider,
    private readonly postgreStore: Postgrestore
  ) {
    this.key = process.env.METABASE_EMBED_KEY;
  }

  async generateUrl(dashid: IViewDashDTO): Promise<any> {
    const payload = {
      resource: { dashboard: dashid.dashboard_id },
      params: dashid.params,
    };
    const token = sign(payload, this.key);
    const dashboard = await this.postgreStore.getDashById(dashid.dashboard_id);
    if (dashboard.length === 0) {
      throw { message: "Not found" };
    }
    this.metabaseProvider.metaBaseUrl = dashboard[0].server;
    return this.metabaseProvider.generateMetaUrl(token);
  }
}

export { ViewDashUseCase };
