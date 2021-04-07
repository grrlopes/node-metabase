import { createdash } from "./usecases/createdashboard";
import { readdash } from "./usecases/readashboard";
import { listDash } from "./usecases/listdashboard";
import { viewdash } from "./usecases/viewdashboard";

const data = {
  email: "ze@ze.ze",
  group: "teste3334",
  name: "czxcxzcxz",
  description: "I don't know what i could write here dude",
};
const ids = {
  account_id: "f10d49f3-a744-4348-a3dd-36580ebe783f",
  actor_id: "d0c2538e-fe58-4a64-b9e1-329518deb99f",
}

viewdash
// readdash
// createdash
// listDash
  // .createDashboard(data)
  // .listDashByActorId(ids)
  .viewGenDashboard({dashboard_id: 61, params: ""})
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
