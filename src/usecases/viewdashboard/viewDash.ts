import { IViewDashDTO } from "./viewDashDTO";
import { ViewDashUseCase } from "./viewDashUseCase";

class ViewDash {
  constructor(private readonly viewdashUseCase: ViewDashUseCase) {}

  async viewGenDashboard(data: IViewDashDTO): Promise<any> {
    try {
      return await this.viewdashUseCase.generateUrl(data);
    } catch (error) {
      return error
    }
  }
}

export { ViewDash };
