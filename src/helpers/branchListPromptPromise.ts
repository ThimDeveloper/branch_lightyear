import inquirer, {
    Answers,
    Question,
    CheckboxQuestion,
    ListQuestion,
    ConfirmQuestion,
} from 'inquirer'
import inquirerAutoComplete from 'inquirer-autocomplete-prompt'
inquirer.registerPrompt('autocomplete', inquirerAutoComplete)
import { searchList } from './autoCompleteUtils'
import getBranchList from './getBranchList'

interface BranchListPromptParams {
    message: string
    shouldConfirm?: boolean
    multipleChoice?: boolean
    fetchRemote?: boolean
    withSearch?: boolean
    fromCache?: boolean
}
export default async function ({
    message,
    shouldConfirm = false,
    multipleChoice = false,
    fetchRemote = false,
    withSearch = false,
    fromCache = false,
}: BranchListPromptParams): Promise<Answers> {
    const branchList = await getBranchList({ fetchRemote, fromCache })

    let questions: Question[] = []

    if (multipleChoice) {
        questions = [
            {
                message: `${message}`,
                type: 'checkbox',
                name: 'branches',
                choices: branchList,
                pageSize: 30,
            } as CheckboxQuestion,
        ]
    } else {
        if (withSearch) {
            questions = [
                ({
                    message: `${message}`,
                    type: 'autocomplete',
                    name: 'branch',
                    source: searchList(branchList as unknown[]),
                } as unknown) as Question<Answers>,
            ]
        } else {
            questions = [
                {
                    message: `${message}`,
                    type: 'list',
                    name: 'branch',
                    choices: branchList,
                    pageSize: 30,
                } as ListQuestion,
            ]
        }
    }

    if (shouldConfirm) {
        questions.push({
            message: 'Are you sure?',
            type: 'confirm',
            name: 'confirmed',
        } as ConfirmQuestion)
    }
    const prompt = inquirer.prompt(questions)

    return prompt
}
