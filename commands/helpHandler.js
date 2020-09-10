const helpDescription = {
  main: `
        bl [command] <options>
    
        list <options> ................ list local git branches
        version .............. show package version
        help  ............ show help menu
        `,
  list: `
        bl list <options>
    
        --pick, -p, ..... pick the branch you want to checkout
        --delete, -d ..... delete selected branch locally`,
};

export default (args) => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];
  console.log(helpDescription[subCmd] || helpDescription.main);
  return;
};
