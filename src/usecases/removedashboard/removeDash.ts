import { IRemoveDashDTO } from "../removedashboard/removeDashDTO";
import { RemoveDashUseCase } from "./removeDashUseCase";

class RemoveDash {
  constructor(private readonly removeUseCase: RemoveDashUseCase) {}

  async removeDashById(id: IRemoveDashDTO): Promise<any> {
    try {
      const result = await this.removeUseCase.removeDashBoard(id);
      return { code: result.status, msg: `Dashboard ${id} was removed` };
    } catch (error) {
      return { message: error.message };
    }
  }
}

export { RemoveDash };
