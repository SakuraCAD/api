import chalk from 'chalk';

export const loggerFormat = `${chalk.gray('[{time}]')} {level}{padding}{message}  ${chalk.gray('controller:{prefix}')}`;