import { Knex, knex } from "knex";
import { nodejs_metabase, test } from "../../../../knexfile";

class Postgresingle {
  private static _instance: Postgresingle;

  private db: string | any;
  private readonly knexfile: Object;

  private constructor() {
    process.env.KNEX_ENV === "test"
      ? (this.knexfile = test)
      : (this.knexfile = nodejs_metabase);
  }

  public static get getInstance(): Postgresingle {
    !Postgresingle._instance
      ? (Postgresingle._instance = new Postgresingle())
      : Postgresingle._instance;
    return Postgresingle._instance;
  }

  private connect(): void {
    this.db = knex(this.knexfile);
  }

  public getStore(): Knex {
    !this.db ? this.connect() : this.db;
    return this.db;
  }
}

export { Postgresingle };
