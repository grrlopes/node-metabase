import { knex } from "knex";
const knexfile = require("../../../knexfile")["test"];
import { createdash } from ".";

const db = knex(knexfile);
afterEach(async () => {
  await db("dashboard").del();
});

beforeAll(async () => {
  await db("dashboard").del();
});

describe("### CREATE DASHBOARD ###", () => {
  it("Should check partial return of dashboard created", async () => {
    const dashboard = await createdash.createDashboard({
      actor_id: "2136785d-0a32-4081-9738-049f5f87ef8b",
      account_id: "2236785d-0a32-4081-9738-049f5f87ef8b",
      email: "ze@ze.ze",
      group: "teste3336",
      name: "teste2",
      description: "I don't know what i could write here",
      server: process.env.METABASE_HOST ?? "",
    });
    expect(dashboard).toBeTruthy();
  });

  it("Should evalute wrong metabase address", async () => {
    const dashboard = await createdash.createDashboard({
      actor_id: "2136785d-0a32-4081-9738-049f5f87ef8b",
      account_id: "2236785d-0a32-4081-9738-049f5f87ef8b",
      email: "ze@ze.ze",
      group: "teste3336",
      name: "teste2",
      description: "What if nobody writes nothing here so what happens ?",
      server: "http://beluga:3001/",
    });
    expect(dashboard).toMatch("connect ECONNREFUSED");
  });
});
