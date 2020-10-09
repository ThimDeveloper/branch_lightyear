import ConfigStore from 'configstore'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name } = require('../../package.json')
const configStore = new ConfigStore(name)

export interface ConfigStoreApi {
    hasItems(): boolean
    store(key: string, input?: string): boolean
    get(key: string): string
}
const configStoreApi: ConfigStoreApi = {
    hasItems: (): boolean => configStore.size > 0,
    store: (key: string, input?: string): boolean => {
        if (!input) return false
        const preSize = configStore.size
        configStore.set(key, input)
        const postSize = configStore.size
        return postSize > preSize
    },
    get: (key: string): string => {
        const branchList = configStore.get(key)
        return branchList
    },
}

export default configStoreApi
