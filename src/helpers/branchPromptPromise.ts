import inquirer, {
    Answers,
    Question,
    ConfirmQuestion
} from 'inquirer'
import { isEmpty } from 'ramda'

interface BranchPromptParams {
    message: string
    shouldConfirm?: boolean
}
export default async function ({
    message,
    shouldConfirm = false,

}: BranchPromptParams): Promise<Answers> {

    let questions: Question[] = []
    questions = [{
        type: 'input',
        name: 'branchName',
        message: `${message}`,
        filter: (input) => {
            return input.trim()
        },
        validate: (_, answers) => {
            const name = answers?.branch
            if (isEmpty(name)) return 'You must provide a branch name.'
            if (!name.includes(" ")) return true
            return 'Spaces are not allowed separator in branch names. Please use _ or - as separators'
        },
    } as Question]


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
