import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { Postgrestore } from "../../infra/store/archive/Postgrestore";
import { ListDash } from "./listDash";
import { ListDashUseCase } from "./listDashUseCase";

const dashstore = new Postgrestore();
const dashprovider = new Metabaseprovider();
const dashUseCase = new ListDashUseCase(dashstore, dashprovider);
const listDash = new ListDash(dashUseCase);

export { listDash };
