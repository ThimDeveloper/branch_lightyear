import pickBranch from '../helpers/pickBranch';
import { ParsedArgs } from 'minimist';
export default async (argv: ParsedArgs): Promise<void> => {
  await pickBranch();
  return;
};
