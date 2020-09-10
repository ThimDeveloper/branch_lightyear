import util from "util";
import chalk from "chalk";
import createBranchPromptPromise from "./createBranchPromptPromise";
const exec = util.promisify(require("child_process").exec);

export default async () => {
  try {
    const { branch } = await createBranchPromptPromise(
      "Which branch would you like to check out?"
    );

    if (branch) {
      console.log(
        chalk.bold.green(`Branch Lightyear - checking out branch: ${branch}`)
      );
      const checkoutScript = `git checkout ${branch}`;
      const { stdout, stderr } = await exec(checkoutScript);
      console.log(`${stdout}\n${chalk.green(stderr)}`);
    }
  } catch (error) {
    console.log(
      chalk.red(`Branch Lightyear - error while checking out branch`),
      error
    );
  }

  return;
};
