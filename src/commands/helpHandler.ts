interface HelpDescriptions {
    main: string
    delete: string
    pick: string
    create: string
}
const helpDescription: Record<string, string> = {
    main: `
        bl [command] <option>
    
        pick ........................... checkout git branch
        delete <option> ................ delete local git branch
        create <option> ................ create new git branch
        version ........................ show package version
        help [command] ................. show help menu
        `,
    delete: `
        bl delete <option>

        -m, --multiple ....... choose multiple branches to delete at once
        `,
    pick: `
        bl pick <option>

        -r, --remote ....... checkout remote branch with fuzzy search functionality
        -c --cache ......... pick from cached list of branches of available (remote only)
        `,
    create: `
        bl create <option>

        -u --upstream ...... create new local and remote branch from master and set upstream tracking
    `,
}

export default (command: keyof HelpDescriptions): void => {
    const entry = command || null

    // eslint-disable-next-line no-console
    console.log(helpDescription[entry])

    return
}
