import createBranch from '../helpers/createBranch'
import { ParsedArgs } from 'minimist'
import helpHandler from './helpHandler'

export default async (argv: ParsedArgs): Promise<void | Error> => {
    if (argv.h) {
        return helpHandler('create')
    }
    if (!argv.u) {
        return await createBranch({ setUpstream: false })
    }
    return await createBranch({ setUpstream: true })


}
