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

### Download the repo

```bash
git clone https://github.com/ThimDeveloper/branch_lightyear.git
```

### Install the CLI locally (using symlink)

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
| `delete`              | delete git branch from select list   |
| `-v --version`        | show package version                 |
| `-h --help`           | show help menu                       |
| `[command] -h --help` | show help menu for specific command  |

## Demo

![alt-text](https://github.com/ThimDeveloper/branch_lightyear/blob/aa85029884c31d002ee64e6568812129a18e66a9/gifs/pick_local_branch_with_fuzzy_search_demo.gif)
