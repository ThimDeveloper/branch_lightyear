import inquirer from "inquirer";
import getBranchList from "./getBranchList";

export default async ({ message, shouldConfirm = false }) => {
  const branchList = await getBranchList();
  const questions = inquirer.prompt([
    {
      message: `${message}`,
      type: "list",
      name: "branch",
      choices: branchList,
      pageSize: 20,
    },
  ]);

  if (shouldConfirm) {
    questions.push({
      message: "Are you sure?",
      type: "confirm",
      name: "confirmed",
    });
  }
  return questions;
};
