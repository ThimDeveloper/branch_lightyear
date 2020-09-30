import inquirer from 'inquirer';
import getBranchList from './getBranchList';

export default async ({ message, shouldConfirm = false, multipleChoice = false }) => {
  const branchList = await getBranchList();

  let questions = [];

  if (multipleChoice) {
    questions = [
      {
        message: `${message}`,
        type: 'checkbox',
        name: 'branches',
        choices: branchList,
        pageSize: 30,
      },
    ];
  } else {
    questions = [
      {
        message: `${message}`,
        type: 'list',
        name: 'branch',
        choices: branchList,
        pageSize: 30,
      },
    ];
  }

  if (shouldConfirm) {
    questions.push({
      message: 'Are you sure?',
      type: 'confirm',
      name: 'confirmed',
    });
  }
  const prompt = inquirer.prompt(questions);

  return prompt;
};
