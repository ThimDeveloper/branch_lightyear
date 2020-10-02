import util from 'util';
import { anyPass, isNil, isEmpty } from 'ramda';
import { NoBranchError } from '../errors';
import childProcess from 'child_process';
const exec = util.promisify(childProcess.exec);

const gitListScript = `git branch`;
const formatBranchesString = (branchesString: string) => {
  return branchesString
    .split('\n')
    .filter((branch) => !branch.includes('*'))
    .map((branch) => branch.trim());
};

export default async function (): Promise<string[] | Error> {
  const { stdout } = await exec(gitListScript);
  const branchList = formatBranchesString(stdout.trim());

  const isBranchListEmptyOrNull = anyPass([isNil, isEmpty])(branchList);
  if (isBranchListEmptyOrNull) throw new NoBranchError('No other active branches found.');
  return branchList;
}
