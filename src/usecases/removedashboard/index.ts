import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { Postgrestore } from "../../infra/store/archive/Postgrestore";
import { RemoveDash } from "./removeDash";
import { RemoveDashUseCase } from "./removeDashUseCase";

const dashstore = new Postgrestore();
const dashprovider = new Metabaseprovider();
const dashusecase = new RemoveDashUseCase(dashprovider, dashstore);
const removedash = new RemoveDash(dashusecase);

export { removedash };
