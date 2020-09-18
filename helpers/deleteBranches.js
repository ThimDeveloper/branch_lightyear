import util from 'util';
import createBranchPromptPromise from './createBranchPromptPromise';
const exec = util.promisify(require('child_process').exec);
import ora from 'ora';
import { dots } from 'cli-spinners';

export default async () => {
  let spinner;
  try {
    const { branches, confirmed } = await createBranchPromptPromise({
      message: 'Which branches would you like to delete?',
      shouldConfirm: true,
      multipleChoice: true,
    });

    if (!confirmed) return;
    if (branches) {
      spinner = ora({
        spinner: dots,
        text: `Branch Lightyear - deleting multiple branches: ${branches}`,
      });
      spinner.start();
      await branches.forEach(async (branch) => {
        const deleteScript = `git branch -D ${branch}`;
        await exec(deleteScript);
      });

      spinner.succeed(
        `Branch Lightyear - finished deleting multiple branches: ${branches}`
      );
    }
    spinner.stop();
  } catch (error) {
    spinner.fail(`Branch Lightyear - error while deleting branch`);
    throw error;
  }

  return;
};
