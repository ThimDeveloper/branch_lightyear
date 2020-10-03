interface HelpDescriptions {
    main: string
    delete: string
    pick: string
}
const helpDescription: Record<string, string> = {
    main: `
        bl [command] <option>
    
        pick ........................... checkout git branch
        delete <option> ................ delete local git branch
        version ........................ show package version
        help [command] ................. show help menu
        `,
    delete: `
        bl delete <option>

        -m, --multiple ....... choose multiple branches to delete at once
        `,
    pick: `
        bl pick <option>

        -r, --remote ....... checkout remote branch
        `,
}

export default (command: keyof HelpDescriptions): void => {
    const entry = command || null

    // eslint-disable-next-line no-console
    console.log(helpDescription[entry])

    return
}
