const helpDescription = {
  main: `
        bl [command] <option>
    
        pick ........................... checkout local git branch
        delete <option> ................ delete local git branch
        version ........................ show package version
        help [command] ................. show help menu
        `,
  delete: `
        bl delete <option>

        -m, --multiple ....... choose multiple branches to delete at once
        `,
};

export default (args) => {
  const subCommand = args._[1] ? args._[1] : null;

  if (subCommand) {
    console.log(helpDescription[subCommand]);
  } else {
    console.log(helpDescription.main);
  }
  return;
};
