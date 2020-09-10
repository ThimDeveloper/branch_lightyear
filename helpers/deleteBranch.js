import util from "util";
import chalk from "chalk";
import createBranchPromptPromise from "./createBranchPromptPromise";
const exec = util.promisify(require("child_process").exec);

export default async () => {
  try {
    const { branch } = await createBranchPromptPromise(
      "Which branch would you like to delete?"
    );

    if (branch) {
      console.log(
        chalk.bold.red(`Branch Lightyear - deleting branch: ${branch}`)
      );
      const deleteScript = `git branch -D ${branch}`;
      const { stdout, stderr } = await exec(deleteScript);
      console.log(`${stdout}\n${chalk.red(stderr)}`);
    }
  } catch (error) {
    console.log(
      chalk.red(`Branch Lightyear - error while deleting branch`),
      error
    );
  }

  return;
};
