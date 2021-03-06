# Branch Lightyear

## The comfort of some pretty sleek Git commands right in the terminal

```bash
            _._                           _._
           ||||                           ||||
           ||||_           ___           _||||
           |  ||        .-'___`-.        ||  |
           \   /      .' .'_ _'. '.      \   /
           /~~|       | (| b d |) |       |~~\
          /'  |       |  |  '  |  |       |  `\
,        /__.-:      ,|  | `-' |  |,      :-.__\       ,
|'-------(    \-''""/.|  /\___/\  |.\""''-/    )------'|
|         \_.-'\   /   '-._____.-'   \   /'-._/        |
|.---------\   /'._| _    .---. ===  |_.'\   /--------.|
'           \ /  | |\_\ _ \=v=/  _   | |  \ /          '
             `.  | | \_\_\ ~~~  (_)  | |  .'
               `'"'|`'--.__.^.__.--'`|'"'`
                   \                 /
                    `,..---'"'---..,'
                      :--..___..--:    TO INFINITY...
                       \         /
                       |`.     .'|       AND BEYOND!
                       |  :___:  |
                       |   | |   |
                       |   | |   |
                       |.-.| |.-.|
                       |`-'| |`-'|
                       |   | |   |
                      /    | |    \
                     |_____| |_____|
                     ':---:-'-:---:'
                     /    |   |    \
                    /.---.|   |.---.\
                    `.____;   :____.'
Buzz Lightyear by Joan Stark
```

[Link to ASCII](https://www.asciiart.eu/movies/toy-story)

## Quick Start

### Try the latest release from npm

```bash
npm install -g @thimlohsedev/branch_lightyear@latest
```

## OR

### Download the repo

```bash
git clone https://github.com/ThimDeveloper/branch_lightyear.git
```

### Install the CLI locally for development (using symlink)

```bash
cd branch_lightyear
npm run local
```

Remember to unlink the package to not keep unnecessary symlinks when you're done

```bash
npm unlink
```

## Command Summary

```bash
bl [command] <option>
```

| Command               | Description                          |
| --------------------- | ------------------------------------ |
| `pick`                | checkout git branch from select list |
| `create`              | create new git branch                |
| `delete`              | delete git branch from select list   |
| `-v --version`        | show package version                 |
| `-h --help`           | show help menu                       |
| `[command] -h --help` | show help menu for specific command  |

## Demo

### Pick local branch with fuzzy search

![pick-local](https://github.com/ThimDeveloper/branch_lightyear/blob/aa85029884c31d002ee64e6568812129a18e66a9/gifs/pick_local_branch_with_fuzzy_search_demo.gif?raw=true)

### Pick remote branch with fuzzy search

![pick-remote](https://github.com/ThimDeveloper/branch_lightyear/blob/aa85029884c31d002ee64e6568812129a18e66a9/gifs/pick_remote_branch_with_fuzzy_search_demo.gif?raw=true)

### Delete single local branch with fuzzy search

![delete-single](https://github.com/ThimDeveloper/branch_lightyear/blob/7ba9bbc7b1bd3fcf25b935ee914ba351fd6648ed/gifs/delete_local_branch_with_fuzzy_search_demo.gif?raw=true)

### Delete multiple local branches with checkboxes

![delete-multiple](https://github.com/ThimDeveloper/branch_lightyear/blob/aa85029884c31d002ee64e6568812129a18e66a9/gifs/delete_multiple_local_branches_demo.json.gif?raw=true)

### Create local branch from master

![create-local](https://github.com/ThimDeveloper/branch_lightyear/blob/c40e9ab75ba13d5cb2b474aea5b10af451e53028/gifs/create_local_branch_demo.gif?raw=true)

### Create local branch from master and automatically setup upstream tracking on remote

![create-remote](https://github.com/ThimDeveloper/branch_lightyear/blob/c40e9ab75ba13d5cb2b474aea5b10af451e53028/gifs/create_local_branch_and_set_upstream_demo.gif?raw=true)
