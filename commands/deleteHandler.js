import deleteBranch from "../helpers/deleteBranch";
import deleteBranches from "../helpers/deleteBranches";

export default async (argv) => {
  if (!argv.m) {
    return await deleteBranch();
  }
  return await deleteBranches();
};
