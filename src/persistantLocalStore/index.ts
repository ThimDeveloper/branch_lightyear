import ConfigStore from 'configstore'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name } = require('../../package.json')
const configStore = new ConfigStore(name)

const remoteBranchesKey = 'remoteBranches'
const createdAtKey = 'createdAt'
const timeUntilLocalStorageIsStaleInMinutes = 5
const millisecondsPerSecond = 1000
const secondsPerMinute = 60
const convertToMillisecondsFromMinutesMultipler =
    millisecondsPerSecond * secondsPerMinute
const timeUntilLocalStorageIsStaleInMilliseconds =
    timeUntilLocalStorageIsStaleInMinutes *
    convertToMillisecondsFromMinutesMultipler

interface ConfigStoreApi {
    isLocalStorageStale(): boolean
    hasSavedRemoteBranches(): boolean
    store(key: string, input?: string): boolean
    get(key: string): string
}
const configStoreApi: ConfigStoreApi = {
    isLocalStorageStale: (): boolean => {
        const createdAt = configStore.get(createdAtKey) || 0
        const currentTimeInMs = Date.now()
        const approximateTimeElapsedInMillisecondsSinceCreated = Math.floor(
            currentTimeInMs - createdAt
        )
        return (
            approximateTimeElapsedInMillisecondsSinceCreated >
            timeUntilLocalStorageIsStaleInMilliseconds
        )
    },
    hasSavedRemoteBranches: (): boolean => configStore.has(remoteBranchesKey),
    store: (key: string, input?: string): boolean => {
        if (!input) return false
        const preSize = configStore.size
        configStore.set(key, input)
        configStore.set(createdAtKey, Date.now())
        const postSize = configStore.size
        return postSize > preSize
    },
    get: (key: string): string => {
        const branchList = configStore.get(key)
        return branchList
    },
}

export default configStoreApi
export { ConfigStoreApi, remoteBranchesKey }
