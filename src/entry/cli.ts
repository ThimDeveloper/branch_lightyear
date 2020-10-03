import minimist from 'minimist'
import chalk from 'chalk'
import commands from '../commands'
import { ErrorHandler } from '../handlers'

const parseArgs = (rawArgs: string[]) =>
    minimist(rawArgs.slice(2), {
        string: ['pick', 'delete'],
        boolean: ['version', 'help', 'multiple', 'remote'],
        alias: {
            v: 'version',
            h: 'help',
            m: 'multiple',
            r: 'remote',
        },
    })

export async function cli(rawArgs: string[]): Promise<void> {
    try {
        const argv = parseArgs(rawArgs)
        const arg0 = argv._[0]

        switch (arg0) {
            case 'pick': {
                await commands.pick(argv)
                break
            }
            case 'delete': {
                await commands.delete(argv)
                break
            }
            default:
                if (argv.h) {
                    return commands.help('main')
                } else if (argv.v) {
                    return commands.version()
                }
                // eslint-disable-next-line no-console
                console.log(
                    chalk.red(`No such command available. Try "bl --help"`)
                )

                break
        }
        return
    } catch (error) {
        ErrorHandler(error)
    }
}
