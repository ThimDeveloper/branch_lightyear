import NodeCache from 'node-cache'
import mirrorKey from 'mirrorkey'
import {} from 'ramda'

export default class Cache {
    private static instance: NodeCache
    private static cacheOptions: NodeCache.Options = { stdTTL: 60 * 5 }

    private constructor() {
        return
    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): NodeCache {
        if (!Cache.instance) {
            Cache.instance = new NodeCache(this.cacheOptions)
        }
        return Cache.instance
    }

    public static storeMultiple(array: string[] | undefined): boolean {
        if (!array) return false
        const multiSet = Object.entries(mirrorKey(array)).map((entry) => ({
            key: entry[0],
            val: entry[1],
        }))
        const instance = Cache.getInstance()
        return instance.mset(multiSet)
    }

    public static getRemoteBranchesFromCache(): string[] {
        const instance = Cache.getInstance()
        return instance.keys()
    }
}
