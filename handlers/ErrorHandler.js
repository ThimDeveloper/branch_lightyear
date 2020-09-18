import chalk from 'chalk';
import * as errors from './../errors';

const ErroHandler = (err) => {
  switch (err) {
    case errors.NoBranchError: {
      console.error(
        `Operation failed due to: ${chalk.red(errors.NoBranchError.message)}`
      );
      break;
    }
    default: {
      console.error(err);
      break;
    }
  }

  return;
};

export default ErroHandler;
