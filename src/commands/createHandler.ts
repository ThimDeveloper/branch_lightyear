import createBranch from '../helpers/createBranch'
import { ParsedArgs } from 'minimist'
import helpHandler from './helpHandler'

export default async (argv: ParsedArgs): Promise<void | Error> => {
    if (argv.h) {
        return helpHandler('create')
    }
    return await createBranch({ setUpstream: !!argv.u, fromMaster: true })
}
