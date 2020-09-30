const { version } = require('../../package.json');

export default (args) => {
  console.log(`v${version}`);
};
