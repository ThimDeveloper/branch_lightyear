const helpDescription = {
  main: `
        bl [command]
    
        pick ................. checkout local git branch
        delete ............... delete local git branch
        version .............. show package version
        help  ................ show help menu
        `,
};

export default (args) => {
  console.log(helpDescription.main);
  return;
};
