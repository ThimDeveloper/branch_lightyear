import chalk from 'chalk';

const createOperationFailedMessage = (name: string, message: string): string =>
  `${chalk.red.bold(name)}: ${chalk.italic.underline(message)}`;

const ErroHandler = (err: Error): void => {
  const errorMessage = createOperationFailedMessage(err.name, err.message);
  // eslint-disable-next-line no-console
  console.error(errorMessage);
  return;
};

export default ErroHandler;
