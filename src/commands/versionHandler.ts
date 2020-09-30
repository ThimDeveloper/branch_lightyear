// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../../package.json');

export default (): void => {
  // eslint-disable-next-line no-console
  console.log(`v${version}`);
};
