import pickLocalBranch from '../helpers/pickLocalBranch'
import { ParsedArgs } from 'minimist'
import pickRemoteBranch from '../helpers/pickRemoteBranch'
import helpHandler from './helpHandler'

export default async (argv: ParsedArgs): Promise<void | Error> => {
    if (argv.h) {
        return helpHandler('pick')
    }
    if (!argv.r) {
        return await pickLocalBranch()
    }
    return await pickRemoteBranch()
}
