import { Account } from "../../entities/Account";
import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { Postgrestore } from "../../infra/store/archive/Postgrestore";
import { ICreateDashDTO } from "./createDashDTO";

class CreateDashUseCase {
  private dashgroup = [];
  private group: any;
  private userId: any;
  constructor(
    private readonly postgreStore: Postgrestore,
    private readonly metabaseProvider: Metabaseprovider
  ) {}

  async createDashBoard(data: ICreateDashDTO): Promise<any> {
    const account = new Account(data);

    this.metabaseProvider.metaBaseUrl = account.server;

    const dashboard = await this.metabaseProvider.createMetaDash(account);

    if (dashboard.errno) {
      throw dashboard;
    }

    this.dashgroup = await this.metabaseProvider.findAllMetaGroup();
    this.group = this.dashgroup.find((value) => value["name"] === data.group);

    if (!this.group) {
      this.group = await this.metabaseProvider.createDashGroup(data.group);
    }

    await this.findAllUser(data.email);

    return await this.postgreStore.save(dashboard, account);
  }

  private async findAllUser(email: string): Promise<void> {
    const user = await this.metabaseProvider.findAllMetaUser();
    const objId = user.find((value) => value.email === email);
    this.userId = objId;
    if (this.userId) {
      await this.metabaseProvider.setDashGroup(this.group.id, this.userId.id);
    }
  }
}

export { CreateDashUseCase };
