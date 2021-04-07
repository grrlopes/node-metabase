import { IViewDashDTO } from "./viewDashDTO";
import { ViewDashUseCase } from "./viewDashUseCase";

class ViewDash {
  constructor(private readonly viewdashUseCase: ViewDashUseCase) {}

  async viewGenDashboard(data: IViewDashDTO): Promise<any> {
    return await this.viewdashUseCase.generateUrl(data);
  }
}

export { ViewDash };
