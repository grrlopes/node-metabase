import { IListIds } from "./listDashDTO";
import { ListDashUseCase } from "./listDashUseCase";

class ListDash {
  constructor(private readonly listdashUseCase: ListDashUseCase) {}

  async listDashByActorId(data: IListIds): Promise<any> {
    try {
      return await this.listdashUseCase.listDashBoard(data);
    } catch (error) {
      return error.message;
    }
  }
}

export { ListDash };
