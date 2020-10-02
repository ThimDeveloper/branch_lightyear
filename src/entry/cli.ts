import minimist from 'minimist'
import chalk from 'chalk'
import commands from '../commands'
import { ErrorHandler } from '../handlers'

const parseArgs = (rawArgs: string[]) =>
    minimist(rawArgs.slice(2), {
        string: ['pick', 'delete'],
        boolean: ['version'],
        alias: {
            v: 'version',
        },
    })

export async function cli(rawArgs: string[]): Promise<void> {
    try {
        const argv = parseArgs(rawArgs)
        const arg0 = argv._[0] || 'help'

        switch (arg0) {
            case 'pick': {
                await commands.pick()
                break
            }
            case 'delete': {
                await commands.delete(argv)
                break
            }
            case 'help': {
                commands.help(argv)
                break
            }
            case 'version': {
                commands.version()
                break
            }
            default:
                // eslint-disable-next-line no-console
                console.log(chalk.red(`No such command available. Try "help"`))
                break
        }
        return
    } catch (error) {
        ErrorHandler(error)
    }
}
