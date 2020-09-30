import inquirer, { AllChoiceMap } from 'inquirer';
import getBranchList from './getBranchList';

interface BranchPromptParams {
  message: string;
  shouldConfirm: boolean;
  multipleChoice: boolean;
}
export default async function ({
  message,
  shouldConfirm = false,
  multipleChoice = false,
}: BranchPromptParams): Promise<inquirer.Answers> {
  const branchList = await getBranchList();

  let questions: inquirer.Question[] = [];

  if (multipleChoice) {
    questions = [
      {
        message: `${message}`,
        type: 'checkbox',
        name: 'branches',
        choices: branchList,
        pageSize: 30,
      } as inquirer.CheckboxQuestion,
    ];
  } else {
    questions = [
      {
        message: `${message}`,
        type: 'list',
        name: 'branch',
        choices: branchList,
        pageSize: 30,
      } as inquirer.ListQuestion,
    ];
  }

  if (shouldConfirm) {
    questions.push({
      message: 'Are you sure?',
      type: 'confirm',
      name: 'confirmed',
    } as inquirer.ConfirmQuestion);
  }
  const prompt = inquirer.prompt(questions);

  return prompt;
}
