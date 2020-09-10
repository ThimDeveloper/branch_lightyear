import minimist from "minimist";
import chalk from "chalk";
import commands from "./../commands";

const parseArgs = (rawArgs) =>
  minimist(rawArgs.slice(2), {
    string: ["pick", "delete", "help"],
    boolean: [, "version"],
    alias: {
      v: "version",
    },
  });

export async function cli(rawArgs) {
  const argv = parseArgs(rawArgs);
  const arg0 = argv._[0] || "help";

  switch (arg0) {
    case "pick": {
      await commands.pick(argv);
      break;
    }
    case "delete": {
      await commands.delete(argv);
      break;
    }
    case "help": {
      commands.help(argv);
      break;
    }
    case "version": {
      commands.version(argv);
      break;
    }
    default:
      console.log(chalk.red(`No such command available. Try "help"`));
      break;
  }
  return;
}
