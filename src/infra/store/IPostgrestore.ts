interface IDashidStore {
  dashboard_id: number
}

interface IAccountStore {
  actor_id: string;
  account_id: string;
  group: string;
  server: string;
  email: string;
  name: string;
  description: string;
}

interface IDashboardStore {
  save: (dash: any, account: any) => Promise<any>;
  getDashByIds: (accountId: string, actorId: string) => Promise<IDashidStore[]>;
}

export { IDashboardStore, IDashidStore, IAccountStore };
