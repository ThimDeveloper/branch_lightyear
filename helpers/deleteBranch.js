import util from "util";
import createBranchPromptPromise from "./createBranchPromptPromise";
const exec = util.promisify(require("child_process").exec);
import ora from "ora";
import { bouncingBall } from "cli-spinners";

export default async () => {
  let spinner;
  try {
    const { branch, confirmed } = await createBranchPromptPromise({
      message: "Which branch would you like to delete?",
      shouldConfirm: true,
    });

    if (confirmed) {
      if (branch) {
        spinner = ora({
          spinner: bouncingBall,
          text: `Branch Lightyear - deleting branch: ${branch}`,
        });

        const deleteScript = `git branch -D ${branch}`;
        const { stderr } = await exec(deleteScript);
        spinner.succeed(stderr);
      }
    }
  } catch (error) {
    spinner.fail(`Branch Lightyear - error while deleting branch`);
    console.error(error);
  }

  return;
};
