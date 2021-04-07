import { IRemoveDashDTO } from "../removedashboard/removeDashDTO";
import { RemoveDashUseCase } from "./removeDashUseCase";

class RemoveDash {
  constructor(private readonly removeUseCase: RemoveDashUseCase) {}

  async removeDashById(id: IRemoveDashDTO): Promise<any> {
    const data = await this.removeUseCase.removeDashBoard(id);
    return data;
  }
}

export { RemoveDash };
