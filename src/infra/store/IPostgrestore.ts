interface IDashidStore {
  dashboard_id: number
}

interface IDashboardStore {
  save: (dash: any) => Promise<void>;
  getDashByIds: (accountId: string, actorId: string) => Promise<IDashidStore[]>;
}

export { IDashboardStore, IDashidStore };
