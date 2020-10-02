import pickLocalBranch from '../helpers/pickLocalBranch'
import { ParsedArgs } from 'minimist'
import pickRemoteBranch from '../helpers/pickRemoteBranch'

export default async (argv: ParsedArgs): Promise<void | Error> => {
    if (!argv.r) {
        return await pickLocalBranch()
    }
    return await pickRemoteBranch()
}
