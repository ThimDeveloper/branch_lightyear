import util from "util";
import chalk from "chalk";
import createBranchPromptPromise from "./createBranchPromptPromise";
import ora from "ora";
import { material } from "cli-spinners";

const exec = util.promisify(require("child_process").exec);

export default async () => {
  let spinner;
  try {
    const { branch } = await createBranchPromptPromise({
      message: "Which branch would you like to check out?",
    });

    if (branch) {
      spinner = ora({
        spinner: material,
        text: `Branch Lightyear - checking out branch: ${branch}`,
      });

      spinner.start();
      const checkoutScript = `git checkout ${branch}`;
      const { stderr } = await exec(checkoutScript);
      spinner.succeed(stderr);
    }
    spinner.stop();
  } catch (error) {
    spinner.fail(`Branch Lightyear - error while checking out branch`);
    console.error(error);
  }

  return;
};
