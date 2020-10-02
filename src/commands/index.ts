import pickHandler from './pickHandler';
import deleteHandler from './deleteHandler';
import helpHandler from './helpHandler';
import versionHandler from './versionHandler';

const commands = {
  help: helpHandler,
  pick: pickHandler,
  delete: deleteHandler,
  version: versionHandler,
};

export default commands;
