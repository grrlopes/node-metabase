import { readdash } from ".";
import { Postgresingle } from "../../infra/store/archive/Postgresingle";
import { createdash } from "../createdashboard";

const db = Postgresingle.getInstance.getStore();
beforeAll(async () => {
  await db("dashboard").del();
});

afterAll(async () => {
  await db("dashboard").del();
  db.destroy();
});

describe("### READ DASHBOARD SETTING ###", () => {
  it("Should return object of setting", async () => {
    const dashID = await createdashboard();
    const dashboard = await readdash.readDashById({
      id: dashID[0].dashboard_id,
    });
    expect(dashboard).toEqual(
      expect.objectContaining({
        archived: false,
        name: "teste2",
        description: "I'm in doubt if i should write down here",
        param_values: null,
        can_write: true,
        enable_embedding: false,
        collection_id: null,
        show_in_getting_started: false,
      })
    );
  });

  it("Should evaluate return error", async () => {
    const dashboard = await readdash.readDashById({ id: 22 });
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
