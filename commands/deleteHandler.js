import deleteBranch from "../helpers/deleteBranch";
import deleteBranches from "../helpers/deleteBranches";

export default async (argv) => {
  console.log(argv);
  await deleteBranches();
  //   await deleteBranch();
  return;
};
