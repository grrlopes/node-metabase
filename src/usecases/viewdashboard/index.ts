import { Postgrestore } from "../../infra/store/archive/Postgrestore";
import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { ViewDash } from "./viewDash";
import { ViewDashUseCase } from "./viewDashUseCase";

const dashstore = new Postgrestore();
const dashprovider = new Metabaseprovider();
const dashUsecase = new ViewDashUseCase(dashprovider, dashstore);
const viewdash = new ViewDash(dashUsecase);

export { viewdash };
