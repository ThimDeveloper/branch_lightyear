import { ParsedArgs } from 'minimist'

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

export default (argv: ParsedArgs): void => {
    const subCommand = argv._[1] ? argv._[1] : null

    try {
        if (subCommand) {
            // eslint-disable-next-line no-console
            console.log(helpDescription[subCommand])
        } else {
            // eslint-disable-next-line no-console
            console.log(helpDescription.main)
        }
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
    }

    return
}
