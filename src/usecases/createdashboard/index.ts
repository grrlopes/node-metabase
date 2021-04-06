import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { Postgrestore } from "../../infra/store/archive/Postgrestore";
import { CreateDash } from "./createDash";
import { CreateDashUseCase } from "./createDashUseCase";

const dashstore = new Postgrestore();
const dashprovider = new Metabaseprovider();
const dashUsecase = new CreateDashUseCase(dashstore, dashprovider);
const createdash = new CreateDash(dashUsecase);

export { createdash };
