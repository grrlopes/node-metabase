import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { Postgrestore } from "../../infra/store/archive/Postgrestore";
import { createDash } from "./createDash";
import { createDashUseCase } from "./createDashUseCase";

const dashstore = new Postgrestore();
const dashprovider = new Metabaseprovider();
const dashUsecase = new createDashUseCase(dashstore, dashprovider);
const createdash = new createDash(dashUsecase);

export { createdash };
