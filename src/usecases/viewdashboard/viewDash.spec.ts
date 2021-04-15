import { knex } from "knex";
import { viewdash } from ".";
import { createdash } from "../createdashboard";
const knexfile = require("../../../knexfile")["test"];

const db = knex(knexfile);
beforeEach(async () => {
  await db("dashboard").del();
});

afterAll(async () => {
  await db("dashboard").del();
});

describe("### VIEW DASHBOARD BY ID ###", () => {
  it("Should evaluate when dashboard is not found", async () => {
    jest.setTimeout(30000)
    const dashboard = await viewdash.viewGenDashboard({
      dashboard_id: 67,
      params: "",
    });
    expect(dashboard).toStrictEqual({ message: "Not found" });
  });

  it("Should evaluate when dashboard is not embeded", async () => {
    jest.setTimeout(30000)
    const newdashboard = await createdashboard();
    const dashboard = await viewdash.viewGenDashboard({
      dashboard_id: newdashboard[0].dashboard_id,
      params: "",
    });
    expect(dashboard).toStrictEqual({
      message: "Embedding is not enabled for this object.",
    });
  });
});

async function createdashboard() {
  return await createdash.createDashboard({
    actor_id: "2136785d-0a32-4081-9738-049f5f87ef8b",
    account_id: "2236785d-0a32-4081-9738-049f5f87ef8b",
    email: "ze@ze.ze",
    group: "teste3336",
    name: "teste2",
    description: "I'm in doubt if i should write down here",
    server: process.env.METABASE_HOST ?? "",
  });
}
