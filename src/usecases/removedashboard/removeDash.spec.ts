import { knex } from "knex";
const knexfile = require("../../../knexfile")["test"];
import { removedash } from ".";
import { createdash } from "../createdashboard";

const db = knex(knexfile);
beforeEach(async () => {
  await db("dashboard").del();
});

afterAll(async () => {
  await db("dashboard").del();
});

describe("### REMOVE DASHBOARD BY ID ###", () => {
  it("Should return 204 message after removed", async () => {
    const newdashboard = await createdashboard();
    const dashboard = await removedash.removeDashById({
      id: newdashboard[0].dashboard_id,
    });
    expect(dashboard).toEqual(expect.objectContaining({ code: 204 }));
  });

  it("Should return error whether not found dashboard id on database", async () => {
    const dashboard = await removedash.removeDashById({
      id: 99203,
    });
    expect(dashboard).toStrictEqual("DashBoard not found");
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
