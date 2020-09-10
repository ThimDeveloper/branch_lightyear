import inquirer from "inquirer";
import getBranchList from "./getBranchList";

export default async (message) => {
  const branchList = await getBranchList();
  return inquirer.prompt([
    {
      message: `${message}`,
      type: "list",
      name: "branch",
      choices: branchList,
      pageSize: 20,
    },
  ]);
};
