import util from 'util'
import childProcess from 'child_process'
const exec = util.promisify(childProcess.exec)
import ora from 'ora'
import branchListPromptPromise from './branchListPromptPromise'
import { DeleteBranchError } from '../errors'

export default async function (): Promise<void | Error> {
    let spinner = ora()
    try {
        const { branch, confirmed } = await branchListPromptPromise({
            message: 'Which (local) branch would you like to delete?',
            shouldConfirm: true,
            withSearch: true,
        })

        if (!confirmed) return
        if (branch) {
            spinner = ora(`Branch Lightyear - deleting branch: [${branch}]`)
            spinner.start()
            const deleteScript = `git branch -D ${branch}`
            const { stderr } = await exec(deleteScript)
            spinner.succeed(stderr)
        }
        spinner.stop()
    } catch (error) {
        spinner.fail(`Branch Lightyear - error while deleting branch`)
        throw new DeleteBranchError(error.message)
    }

    return
}
