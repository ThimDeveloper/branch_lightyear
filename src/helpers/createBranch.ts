import util from 'util'
import ora from 'ora'
import childProcess from 'child_process'
import branchPromptPromise from './branchPromptPromise'
import { CreateBranchError } from '../errors'
const exec = util.promisify(childProcess.exec)

/* Interfaces */
interface CreateBranchParams {
    setUpstream?: boolean
    fromMaster?: boolean
}

/* Git scripts */
const gitCreateNewBranchWithName = (branchName: string, fromMaster?: boolean) =>
    `git branch ${branchName} ${fromMaster ? 'master' : ''}`.trim()
const gitCreateNewBranchWithNameAndUpstream = (branchName: string, fromMaster?: boolean) =>
    `git branch ${branchName} ${fromMaster ? 'master' : ''}`.trim() + `git push -u origin ${branchName}`.trim()

export default async function (
    options: CreateBranchParams
): Promise<void | Error> {
    const { setUpstream } = options

    let spinner = ora()
    try {
        const { branchName } = await branchPromptPromise({
            message: 'What name would you like your new branch to have?',
            shouldConfirm: true,
        })
        spinner = ora(`Branch Lightyear - creating branch: ${branchName} `)
        spinner.start()

        if (setUpstream) {
            const { stderr } = await exec(
                gitCreateNewBranchWithNameAndUpstream(branchName)
            )
            spinner.succeed(stderr)
        } else {
            const { stderr } = await exec(
                gitCreateNewBranchWithName(branchName)
            )
            spinner.succeed(stderr)
        }
    } catch (error) {
        spinner.fail(`Branch Lightyear - error while creating branch`)
        throw new CreateBranchError(error.message)
    }

    return
}
