import { knex } from "knex";
const knexfile = require("../../../knexfile")["test"];
import { readdash } from ".";

const db = knex(knexfile);
beforeAll(async () => {
  await db("dashboard").del();
  await insert();
});

afterAll(async () => {
  await db("dashboard").del();
});

describe("### LIST DASHBOARD SETTING ###", () => {
  it("Should return object of setting", async () => {
    const dashboard = await readdash.readDashById({ id: 1 });
    expect(dashboard).toStrictEqual({ code: 404, msg: "Not Found" });
  });

  it("Should evaluete return error", async () => {
    const dashboard = await readdash.readDashById({ id: 22 });
    expect(dashboard).toStrictEqual("DashBoard not found");
  });
});

async function insert() {
  await db("dashboard").insert({
    id: "2036785d-0a32-4081-9738-049f5f87ef8b",
    actor_id: "2136785d-0a32-4081-9738-049f5f87ef8b",
    account_id: "2236785d-0a32-4081-9738-049f5f87ef8b",
    dashboard_id: 1,
    server: process.env.METABASE_HOST,
    created_at: "2021-04-08 07:19:33.455+00",
    description: "I don't know what i could write here",
    name: "nobody",
  });
}
