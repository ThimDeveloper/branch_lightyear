import util from 'util'
import ora from 'ora'
import childProcess from 'child_process'
const exec = util.promisify(childProcess.exec)
import branchListPromptPromise from './branchListPromptPromise'
import { DeleteBranchError } from '../errors'

export default async function (): Promise<void | Error> {
    let spinner = ora()
    try {
        const { branches, confirmed } = await branchListPromptPromise({
            message: 'Which branches would you like to delete?',
            shouldConfirm: true,
            multipleChoice: true,
        })

        if (!confirmed) return
        if (branches) {
            spinner = ora(
                `Branch Lightyear - deleting multiple branches: [${branches}]`
            )
            spinner.start()
            await branches.forEach(async (branch: string) => {
                const deleteScript = `git branch -D ${branch}`
                await exec(deleteScript)
            })

            spinner.succeed(
                `Branch Lightyear - finished deleting multiple branches: [${branches}]`
            )
        }
        spinner.stop()
    } catch (error) {
        spinner.fail(`Branch Lightyear - error while deleting branch`)
        throw new DeleteBranchError(error.message)
    }

    return
}
