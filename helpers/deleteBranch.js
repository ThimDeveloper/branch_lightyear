import util from "util";
import chalk from "chalk";
import createBranchPromptPromise from "./createBranchPromptPromise";
const exec = util.promisify(require("child_process").exec);
import ora from "ora";
import { dots2 } from "cli-spinners";
import { stderr } from "process";

export default async () => {
  let spinner;
  try {
    const { branch } = await createBranchPromptPromise(
      "Which branch would you like to delete?"
    );

    if (branch) {
      spinner = ora({
        spinner: dots2,
        text: `Branch Lightyear - deleting branch: ${branch}`,
      });

      const deleteScript = `git branch -D ${branch}`;
      const { stderr } = await exec(deleteScript);
      spinner.succeed(stderr);
    }
  } catch (error) {
    spinner.fail(`Branch Lightyear - error while deleting branch`);
    console.error(error);
  }

  return;
};
