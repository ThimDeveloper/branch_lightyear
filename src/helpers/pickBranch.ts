import util from 'util';
import ora from 'ora';
import { dots } from 'cli-spinners';
import createBranchPromptPromise from './createBranchPromptPromise';
import { PickBranchError } from '../errors';
import childProcess from 'child_process';
const exec = util.promisify(childProcess.exec);

export default async function (): Promise<void | Error> {
  let spinner = ora();
  try {
    const { branch } = await createBranchPromptPromise({
      message: 'Which branch would you like to check out?',
    });

    if (branch) {
      spinner = ora({
        spinner: dots,
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
    throw new PickBranchError(error.message);
  }

  return;
}
