import { createdash } from "./usecases/createdashboard";
import { readdash } from "./usecases/readashboard";
import { listDash } from "./usecases/listdashboard";
import { viewdash } from "./usecases/viewdashboard";
import { removedash } from "./usecases/removedashboard";

/**
 * Class should be used by fieldlink-backend.
 **/
class metabase {
  /**
   * @param {Object} object An sample of calling
   * createDashboard( actor_id: "213678", account_id: "22367",
   * email: "ze@ze.ze", group: "teste3336", name: "teste2",
   * description: "Sample test", server: http://metabase:3000 );
   * @returns {Object} It shall return object.
   **/
  async createDashboard(obj: any): Promise<any> {
    return await createdash.createDashboard(obj);
  }

  /**
   * @param {Number} number It should be number e.g readDashById(10)
   * @returns {Object} return an object
   **/
  async readDashById(dashId: number): Promise<any> {
    return await readdash.readDashById({ id: dashId });
  }

  /**
   * @param {String} string  e.g: listDashByActorId(47fefa2, 56bdfae )
   * @returns {Object} return object
   **/
  async listDashByActorId(accountId: string, actorId: string): Promise<any> {
    return await listDash.listDashByActorId({
      account_id: accountId,
      actor_id: actorId,
    });
  }

  /**
   * @param {Params} params number and object e.g: viewGenDashboard(61, params: "")
   * params could be either empty or object like params:{sample1: "value1", sample2: value2}
   * @returns {object} return object
   **/
  async viewGenDashboard(dashid: number, params: any): Promise<any> {
    return await viewdash.viewGenDashboard({
      dashboard_id: dashid,
      params: params,
    });
  }

  /**
   * @param {Number} number Must be type number e.g: removedash(61)
   * @returns {object} return object 'code and message'
   **/
  async removedash(dashid: number): Promise<any> {
    return await removedash.removeDashById({ id: dashid });
  }
}

export { metabase };
