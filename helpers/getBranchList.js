import util from 'util';
import { anyPass, isNil, isEmpty } from 'ramda';
import { NoBranchError } from '../errors';
const exec = util.promisify(require('child_process').exec);

const gitListScript = `git branch`;
const formatBranchesString = (branchesString) => {
  return branchesString
    .split('\n')
    .filter((branch) => !branch.includes('*'))
    .map((branch) => branch.trim());
};

export default async () => {
  const { stdout } = await exec(gitListScript);
  const branchList = formatBranchesString(stdout.trim());

  const isBranchListEmptyOrNull = anyPass([isNil, isEmpty])(branchList);
  if (isBranchListEmptyOrNull)
    throw new NoBranchError('No other active branches found.');
  return branchList;
};
