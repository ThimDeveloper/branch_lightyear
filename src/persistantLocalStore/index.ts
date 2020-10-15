import ConfigStore from 'configstore'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name } = require('../../package.json')
const configStore = new ConfigStore(name)

const createdAtKey = 'createdAt'
const timeUntilLocalStorageIsStaleInMinutes = 15
const millisecondsPerSecond = 1000
const secondsPerMinute = 60
const convertToMillisecondsFromMinutesMultipler =
    millisecondsPerSecond * secondsPerMinute
const timeUntilLocalStorageIsStaleInMilliseconds =
    timeUntilLocalStorageIsStaleInMinutes *
    convertToMillisecondsFromMinutesMultipler

export interface ConfigStoreApi {
    isLocalStorageStale(createdAt: number): boolean
    hasItems(): boolean
    store(key: string, input?: string): boolean
    get(key: string): string
}
const configStoreApi: ConfigStoreApi = {
    isLocalStorageStale: (createdAt: number): boolean => {
        const currentTimeInMs = Date.now()
        const approximateTimeElapsedInMillisecondsSinceCreated = Math.floor(
            currentTimeInMs - createdAt
        )
        return (
            approximateTimeElapsedInMillisecondsSinceCreated >
            timeUntilLocalStorageIsStaleInMilliseconds
        )
    },
    hasItems: (): boolean => configStore.size > 0,
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
export { createdAtKey }
