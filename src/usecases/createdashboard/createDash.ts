import { createDashUseCase } from "./createDashUseCase";

class createDash {
  constructor(private readonly createdashUseCase: createDashUseCase) {}

  async createDashboard(obj: any): Promise<void> {
    await this.createdashUseCase.createDashBoard(obj);
  }
}

export { createDash };
