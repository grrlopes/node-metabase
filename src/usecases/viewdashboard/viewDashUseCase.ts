import { sign } from "jsonwebtoken";
import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { IViewDashDTO } from "./viewDashDTO";

class ViewDashUseCase {
  constructor(private readonly metabaseProvider: Metabaseprovider) {}

  async generateUrl(dashid: IViewDashDTO): Promise<any> {
    const key = process.env.METABASE_EMBED_KEY ?? ""
    const payload = {
      resource: { dashboard: dashid.dashboard_id },
      params: dashid.params
    };
    const token = sign(payload, key)
    return this.metabaseProvider.generateMetaUrl(token);
  }
}

export { ViewDashUseCase };

