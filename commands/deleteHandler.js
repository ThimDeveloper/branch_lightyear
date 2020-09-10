import deleteBranch from "../helpers/deleteBranch";

export default async (argv) => {
  await deleteBranch();
  return;
};
