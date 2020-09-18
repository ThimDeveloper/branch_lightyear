import util from 'util';
const exec = util.promisify(require('child_process').exec);
import ora from 'ora';
import { dots } from 'cli-spinners';
import createBranchPromptPromise from './createBranchPromptPromise';
import { DeleteBranchError } from '../errors';

export default async () => {
  let spinner = ora();
  try {
    const { branch, confirmed } = await createBranchPromptPromise({
      message: 'Which branch would you like to delete?',
      shouldConfirm: true,
    });

    if (!confirmed) return;
    if (branch) {
      spinner = ora({
        spinner: dots,
        text: `Branch Lightyear - deleting branch: ${branch}`,
      });
      spinner.start();

      const deleteScript = `git branch -D ${branch}`;
      const { stderr } = await exec(deleteScript);
      spinner.succeed(stderr);
    }
    spinner.stop();
  } catch (error) {
    spinner.fail(`Branch Lightyear - error while deleting branch`);
    throw new DeleteBranchError(error.message);
  }

  return;
};
