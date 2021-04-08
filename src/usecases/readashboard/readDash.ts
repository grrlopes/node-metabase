import { IReadDashDTO } from "./readDashDTO";
import { ReadDashUseCase } from "./readDashUseCase";

class ReadDash {
  constructor(private readonly readdashUseCase: ReadDashUseCase) {}

  async readDashById(id: IReadDashDTO): Promise<any> {
    try {
      return await this.readdashUseCase.readDashBoard(id);
    } catch (error) {
      return error.message;
    }
  }
}

export { ReadDash };
