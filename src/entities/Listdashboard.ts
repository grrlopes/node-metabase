class Listdashboard {
  public account_id: string;
  public actor_id: string;

  constructor(props: Required<Listdashboard>) {
    this.account_id = props.account_id;
    this.actor_id = props.actor_id;
  }
}

export { Listdashboard };
