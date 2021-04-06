import { CreateDashUseCase } from "./createDashUseCase";

class CreateDash {
  constructor(private readonly createdashUseCase: CreateDashUseCase) {}

  async createDashboard(obj: any): Promise<void> {
    await this.createdashUseCase.createDashBoard(obj);
  }
}

export { CreateDash };
