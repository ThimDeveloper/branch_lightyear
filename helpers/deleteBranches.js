import util from "util";
import createBranchPromptPromise from "./createBranchPromptPromise";
const exec = util.promisify(require("child_process").exec);
import ora from "ora";
import { bouncingBall } from "cli-spinners";

export default async () => {
  let spinner;
  try {
    const { branches, confirmed } = await createBranchPromptPromise({
      message: "Which branches would you like to delete?",
      shouldConfirm: true,
      multipleChoice: true,
    });

    if (!confirmed) return;

    if (branches) {
      spinner = ora({
        spinner: bouncingBall,
        text: `Branch Lightyear - deleting multiple branches: ${branches}`,
      });
      await branches.forEach(async (branch) => {
        const deleteScript = `git branch -D ${branch}`;
        await exec(deleteScript);
      });

      spinner.succeed(
        `Branch Lightyear - finished deleting multiple branches: ${branches}`
      );
    }
  } catch (error) {
    spinner.fail(`Branch Lightyear - error while deleting branch`);
    console.error(error);
  }

  return;
};
