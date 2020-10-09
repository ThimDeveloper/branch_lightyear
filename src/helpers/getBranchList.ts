import util from 'util'
import { anyPass, isNil, isEmpty } from 'ramda'
import configStoreApi, { ConfigStoreApi } from '../persistantLocalStore'
import { NoBranchError } from '../errors'
import childProcess from 'child_process'
const exec = util.promisify(childProcess.exec)

/* Interfaces */
interface FormatBranchesStringOptions {
    localBranchesString: string
    remoteBranchesString?: string
}
interface GetBranchListParams {
    fetchRemote?: boolean
    fromLocalStore?: boolean
}

interface FilterNewBranchesParams {
    localBranches: string[]
    remoteBranches: string[]
}

/* Git scripts */
const gitListLocalBranchesScript = `git branch`
const gitListRemoteBranchesScript = `git fetch --prune && git branch -r`

/* Util functions */

const shouldFetchFromLocalStore = (
    configStore: ConfigStoreApi,
    fromCache?: boolean
): boolean => configStore.hasItems() && !!fromCache

const filterNewOnRemote = (parameters: FilterNewBranchesParams) => {
    const remote = new Set(parameters.remoteBranches)
    const local = new Set(parameters.localBranches)
    const diff = Array.from(remote).filter((branch) => !local.has(branch))
    return diff
}

const formatBranchesString = (options: FormatBranchesStringOptions) => {
    const { localBranchesString, remoteBranchesString } = options

    let localBranches = localBranchesString
        .split('\n')
        .filter((branch) => !branch.includes('*'))
        .map((branch) => branch.trim())

    if (!remoteBranchesString) {
        return localBranches
    }

    localBranches = localBranchesString
        .split('\n')
        .map((branch) => branch.replace('*', ''))
        .map((branch) => branch.trim())
    const remoteBranches = remoteBranchesString
        .split('\n')
        .filter((branch) => !branch.includes('HEAD'))
        .map((branch) => branch.split('origin/')[1])
    return filterNewOnRemote({ localBranches, remoteBranches })
}

export default async function (
    options: GetBranchListParams
): Promise<string[] | undefined | Error> {
    let remoteBranches: string
    let branchList: string[] | undefined
    const localBranches = (
        await exec(gitListLocalBranchesScript)
    )?.stdout.trim()

    if (options?.fetchRemote) {
        if (shouldFetchFromLocalStore(configStoreApi, options.fromLocalStore)) {
            remoteBranches = configStoreApi.get('remoteBranches')
        } else {
            remoteBranches = (
                await exec(gitListRemoteBranchesScript)
            )?.stdout.trim()
            configStoreApi.store('remoteBranches', remoteBranches)
        }
        branchList = formatBranchesString({
            localBranchesString: localBranches,
            remoteBranchesString: remoteBranches,
        })
    } else {
        branchList = formatBranchesString({
            localBranchesString: localBranches,
        })
    }

    const isBranchListEmptyOrNull = anyPass([isNil, isEmpty])(branchList)
    if (isBranchListEmptyOrNull) {
        if (options?.fetchRemote) {
            throw new NoBranchError(
                'No other active (remote) branches that do not already have a local copy.'
            )
        }
        throw new NoBranchError(
            'No other active (local) branches found. Try and create a new branch.'
        )
    }
    return branchList
}
