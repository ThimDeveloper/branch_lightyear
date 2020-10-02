import inquirer, { Answers, Question, CheckboxQuestion, ListQuestion, ConfirmQuestion } from 'inquirer';
import getBranchList from './getBranchList';

interface BranchPromptParams {
  message: string;
  shouldConfirm?: boolean;
  multipleChoice?: boolean;
}
export default async function ({
  message,
  shouldConfirm = false,
  multipleChoice = false,
}: BranchPromptParams): Promise<Answers> {
  const branchList = await getBranchList();

  let questions: Question[] = [];

  if (multipleChoice) {
    questions = [
      {
        message: `${message}`,
        type: 'checkbox',
        name: 'branches',
        choices: branchList,
        pageSize: 30,
      } as CheckboxQuestion,
    ];
  } else {
    questions = [
      {
        message: `${message}`,
        type: 'list',
        name: 'branch',
        choices: branchList,
        pageSize: 30,
      } as ListQuestion,
    ];
  }

  if (shouldConfirm) {
    questions.push({
      message: 'Are you sure?',
      type: 'confirm',
      name: 'confirmed',
    } as ConfirmQuestion);
  }
  const prompt = inquirer.prompt(questions);

  return prompt;
}
