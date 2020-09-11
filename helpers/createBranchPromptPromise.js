import inquirer from "inquirer";
import getBranchList from "./getBranchList";

export default async ({ message, shouldConfirm = false }) => {
  const branchList = await getBranchList();

  const questions = [
    {
      message: `${message}`,
      type: "list",
      name: "branch",
      choices: branchList,
      pageSize: 20,
    },
  ];
  if (shouldConfirm) {
    questions.push({
      message: "Are you sure?",
      type: "confirm",
      name: "confirmed",
    });
  }
  const prompt = inquirer.prompt(questions);

  return prompt;
};
