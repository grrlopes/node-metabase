import { knex } from "knex";
const knexfile = require("../../../knexfile")["test"];
import { listDash } from ".";

const db = knex(knexfile);
beforeAll(async () => {
  await db("dashboard").del();
  await insert();
});

describe("### LIST DASHBOARD BY ACTOR/ACCOUNT ID ###", () => {
  it("Should return object dashboard", async () => {
    const dashboard = await listDash.listDashByActorId({
      account_id: "2236785d-0a32-4081-9738-049f5f87ef8b",
      actor_id: "2136785d-0a32-4081-9738-049f5f87ef8b",
    });
    expect(dashboard).toMatchObject({});
  });

  it("Should evaluate return error passing id wrong", async () => {
    const dashboard = await listDash.listDashByActorId({
      account_id: "2236785d-0a32-4081-9738-049f5f87ef8b",
      actor_id: "1111185d-0a32-4081-9738-049f5f87ef8b",
    });
    expect(dashboard).toStrictEqual("DashBoard not found");
  });

  it("Return error when it doesn't get metabase response", async () => {
    const dashboard = await listDash.listDashByActorId({
      account_id: "2236785d-0a32-4081-9738-049f5f87ef8b",
      actor_id: "2136785d-0a32-4081-9738-049f5f87ef8b",
    });
    expect(dashboard).toStrictEqual({ code: 404, msg: "Not Found" });
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
