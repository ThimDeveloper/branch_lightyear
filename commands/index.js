import helpHandler from "./helpHandler";
import listHandler from "./listHandler";
import versionHandler from "./versionHandler";

const commands = {
  help: helpHandler,
  list: listHandler,
  version: versionHandler,
};

export default commands;
