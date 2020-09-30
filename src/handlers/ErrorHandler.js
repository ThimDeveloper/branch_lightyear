import chalk from 'chalk';

const createOperationFailedMessage = (name, message) => `${chalk.red.bold(name)}: ${chalk.italic.underline(message)}`;

const ErroHandler = (err) => {
  const errorMessage = createOperationFailedMessage(err.name, err.message);
  console.error(errorMessage);
  return;
};

export default ErroHandler;
