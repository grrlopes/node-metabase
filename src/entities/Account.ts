import { v4 as uuidv4 } from "uuid";

class Account {
  public readonly id!: string;
  public actor_id: string;
  public account_id: string;
  public group: string;
  public email: string;
  public name: string;
  public description: string;

  constructor(TPL: Omit<Account, "id">, id?: string) {
    this.actor_id = TPL.actor_id;
    this.account_id = TPL.account_id;
    this.group = TPL.group;
    this.email = TPL.email;
    this.name = TPL.name;
    this.description = TPL.description;
    if (!id) {
      this.id = uuidv4();
    }
  }
}

export { Account };
