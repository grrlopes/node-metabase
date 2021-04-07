interface INewDashprovider {
  actor_id: string;
  account_id: string;
  group: string;
  name: string;
  description: string;
}

interface IMetaBaseprovider {
  createMetaDash: (dash: any) => Promise<any>;
  findAllMetaDash: () => Promise<any>;
  findMetaDashById: (id: number) => Promise<any>;
  setDashGroup: (groupid: number, userid: number) => Promise<any>;
  findAllMetaGroup: () => Promise<any>;
  createDashGroup: (group: string) => Promise<number>;
  findAllMetaUser: () => Promise<any[]>;
  findDashByActorId: (id: number) => Promise<any>;
  generateMetaUrl: (token: string) => Promise<any>;
  removeMetaDashById: (id: number) => Promise<any>;
}

export { IMetaBaseprovider, INewDashprovider };
