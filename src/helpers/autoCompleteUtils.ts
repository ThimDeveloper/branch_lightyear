import fuzzy from 'fuzzy'
function getRandomInt(min: number, max?: number): number {
    return max
        ? Math.floor(Math.random() * (max - min + 1) + min)
        : Math.floor(1 + Math.random() * Math.floor(min))
}

export function searchList(inputStates: unknown[]) {
    return function (_answers: unknown, input: string): Promise<unknown> {
        input = input || ''
        return new Promise(function (resolve) {
            setTimeout(function () {
                const fuzzyResult = fuzzy.filter(input, inputStates)
                const results = fuzzyResult.map(function (el) {
                    return el.original
                })
                resolve(results)
            }, getRandomInt(30, 500))
        })
    }
}
