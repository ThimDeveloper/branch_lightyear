import deleteBranch from '../helpers/deleteBranch'
import deleteBranches from '../helpers/deleteBranches'
import { ParsedArgs } from 'minimist'
import helpHandler from './helpHandler'

export default async (argv: ParsedArgs): Promise<void | Error> => {
    if (argv.h) {
        return helpHandler('delete')
    }
    if (!argv.m) {
        return await deleteBranch()
    }
    return await deleteBranches()
}
