import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { Postgrestore } from "../../infra/store/archive/Postgrestore";
import { ReadDash } from "./readDash";
import { ReadDashUseCase } from "./readDashUseCase";

const dashstore = new Postgrestore();
const dashprovider = new Metabaseprovider();
const dashusecase = new ReadDashUseCase(dashprovider, dashstore);
const readdash = new ReadDash(dashusecase);

export { readdash };
