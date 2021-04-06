import { IReadDashDTO } from "./readDashDTO";
import { ReadDashUseCase } from "./readDashUseCase";

class ReadDash {
  constructor(private readonly readdashUseCase: ReadDashUseCase) {}

  async readDashById(id: IReadDashDTO): Promise<any> {
    const data = await this.readdashUseCase.readDashBoard(id);
    return data
  }
}

export { ReadDash };
