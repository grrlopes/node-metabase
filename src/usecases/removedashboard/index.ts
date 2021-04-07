import { Metabaseprovider } from "../../infra/provider/archive/Metabaseprovider";
import { RemoveDash } from "./removeDash";
import { RemoveDashUseCase } from "./removeDashUseCase";

const dashprovider = new Metabaseprovider();
const dashusecase = new RemoveDashUseCase(dashprovider);
const removedash = new RemoveDash(dashusecase);

export { removedash };
