import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { ViewDash } from "./viewDash";
import { ViewDashUseCase } from "./viewDashUseCase";

const dashprovider = new Metabaseprovider();
const dashUsecase = new ViewDashUseCase(dashprovider)
const viewdash = new ViewDash(dashUsecase)

export { viewdash };
