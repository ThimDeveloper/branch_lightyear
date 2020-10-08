import util from 'util'
import ora from 'ora'
import branchListPromptPromise from './branchListPromptPromise'
import { PickBranchError } from '../errors'
import childProcess from 'child_process'
const exec = util.promisify(childProcess.exec)

export default async function (): Promise<void | Error> {
    let spinner = ora()
    try {
        const { branch } = await branchListPromptPromise({
            message: 'Which (local) branch would you like to check out?',
            withSearch: true,
        })

        if (branch) {
            spinner = ora(
                `Branch Lightyear - checking out (local) branch: ${branch}`
            )
            spinner.start()
            const checkoutScript = `git checkout ${branch}`
            const { stderr } = await exec(checkoutScript)
            spinner.succeed(stderr)
        }
        spinner.stop()
    } catch (error) {
        spinner.fail(
            `Branch Lightyear - error while checking out (local) branch`
        )
        throw new PickBranchError(error.message)
    }

    return
}
