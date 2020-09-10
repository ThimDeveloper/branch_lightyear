const util = require("util");
const exec = util.promisify(require("child_process").exec);

export default async (argv, withLogs = true) => {
  try {
    const gitListScript = `git branch`;
    const { stdout, stderr } = await exec(gitListScript);

    if (withLogs) {
      console.log("stdout:", stdout);
      console.log("stderr:", stderr);
    }
    return stdout.trim();
  } catch (e) {
    console.log(e);
    return null;
  }
};
