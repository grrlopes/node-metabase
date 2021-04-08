import { ICreateDashDTO } from "./createDashDTO";
import { CreateDashUseCase } from "./createDashUseCase";

class CreateDash {
  constructor(private readonly createdashUseCase: CreateDashUseCase) {}

  async createDashboard(obj: ICreateDashDTO): Promise<any> {
    try {
      return await this.createdashUseCase.createDashBoard(obj);
    } catch (error) {
      return error.message;
    }
  }
}

export { CreateDash };
