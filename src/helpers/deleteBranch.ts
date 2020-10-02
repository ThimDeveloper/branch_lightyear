import util from 'util'
import childProcess from 'child_process'
const exec = util.promisify(childProcess.exec)
import ora from 'ora'
import branchPromptPromise from './branchPromptPromise'
import { DeleteBranchError } from '../errors'

export default async function (): Promise<void | Error> {
    let spinner = ora()
    try {
        const { branch, confirmed } = await branchPromptPromise({
            message: 'Which branch would you like to delete?',
            shouldConfirm: true,
        })

        if (!confirmed) return
        if (branch) {
            spinner = ora(`Branch Lightyear - deleting branch: ${branch}`)
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
