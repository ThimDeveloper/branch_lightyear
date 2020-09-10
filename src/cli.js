import minimist from "minimist";
import commands from "./../commands";

const parseArgs = (rawArgs) =>
  minimist(rawArgs.slice(2), {
    string: ["list", "help"],
    boolean: ["pick", "delete", "version"],
    alias: {
      v: "version",
      p: "pick",
      d: "delete",
    },
  });

export async function cli(rawArgs) {
  const argv = parseArgs(rawArgs);
  const arg0 = argv._[0] || "help";

  switch (arg0) {
    case "list": {
      await commands.list(argv);
      break;
    }
    case "help": {
      commands.help(argv);
      break;
    }
    default:
      break;
  }
  return;
}
