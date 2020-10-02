import deleteBranch from '../helpers/deleteBranch';
import deleteBranches from '../helpers/deleteBranches';
import { ParsedArgs } from 'minimist';

export default async (argv: ParsedArgs): Promise<void | Error> => {
  if (!argv.m) {
    return await deleteBranch();
  }
  return await deleteBranches();
};
