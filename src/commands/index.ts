import pickHandler from './pickHandler'
import deleteHandler from './deleteHandler'
import helpHandler from './helpHandler'
import versionHandler from './versionHandler'

export enum AvailableCommands {
    HELP = 'help',
    PICK = 'pick',
    CREATE = 'create',
    DELETE = 'delete',
    VERSION = 'version'
}
const commands = {
    [AvailableCommands.HELP]: helpHandler,
    [AvailableCommands.PICK]: pickHandler,
    [AvailableCommands.DELETE]: deleteHandler,
    [AvailableCommands.VERSION]: versionHandler,
}

export default commands
