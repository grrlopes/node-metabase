import Axios, { AxiosInstance } from "axios";
import { IMetaBaseprovider, INewDashprovider } from "../IMetabaseprovider";

class Metabaseprovider implements IMetaBaseprovider {
  private readonly axios: AxiosInstance;
  constructor() {
    this.axios = Axios.create({
      baseURL: process.env.METABASE_HOST,
      headers: {
        "X-Metabase-Session": process.env.METABASE_KEY,
        "Content-Type": "application/json",
      },
    });
  }

  async createMetaDash(dash: INewDashprovider): Promise<any> {
    try {
      const result = await this.axios.post("/api/dashboard/", {
        name: dash.name,
        description: dash.description,
      });
      return result.data;
    } catch (error) {
      return {
        code: error.response.status,
        msg: error.response.statusText,
      };
    }
  }

  async findAllMetaGroup(): Promise<any> {
    try {
      const result = await this.axios.get("/api/permissions/group");
      return result.data;
    } catch (error) {
      return {
        code: error.response.status,
        msg: error.response.statusText,
      };
    }
  }

  async setDashGroup(groupid: number, userid: number): Promise<any> {
    try {
      const result = await this.axios.post("/api/permissions/membership", {
        group_id: groupid,
        user_id: userid,
      });
      return result.data;
    } catch (error) {
      return {
        code: error.response.status,
        msg: error.response.statusText,
      };
    }
  }

  async findAllMetaUser(): Promise<any[]> {
    const result = await this.axios.get("/api/user/");
    return result.data;
  }

  async createDashGroup(group: string): Promise<any> {
    const result = await this.axios.post("/api/permissions/group", {
      name: group,
    });
    return result.data;
  }

  async findAllMetaDash(): Promise<any> {}
  async findMetaDashById(): Promise<any> {}
}

export { Metabaseprovider };
