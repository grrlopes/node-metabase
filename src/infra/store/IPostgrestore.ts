interface IDashboardStore {
  save: (dash: any) => Promise<void>;
}

export { IDashboardStore };
