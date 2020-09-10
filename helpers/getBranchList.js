import util from "util";
const exec = util.promisify(require("child_process").exec);

const gitListScript = `git branch`;
const formatBranchesString = (branchesString) => {
  return branchesString
    .replace("*", "")
    .split("\n")
    .map((branch) => branch.trim());
};

export default async () => {
  try {
    const { stdout } = await exec(gitListScript);
    const branchList = formatBranchesString(stdout.trim());
    return branchList;
  } catch (e) {
    return e;
  }
};
