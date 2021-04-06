import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { ReadDash } from "./readDash";
import { ReadDashUseCase } from "./readDashUseCase";

const dashprovider = new Metabaseprovider();
const dashusecase = new ReadDashUseCase(dashprovider);
const readdash = new ReadDash(dashusecase);

export { readdash };
