import { Server } from '@overnightjs/core';

import Logger from 'untitled-logging-library';

import { RootController } from './controllers/RootController';
import morgan from 'morgan';

import * as constants from './constants';
import chalk from 'chalk';

export default class SakuraCADServer extends Server {
    private logger: Logger;

    constructor() {
        super();

        this.logger = new Logger(null, `${chalk.gray('[{time}]')} {level}{padding}{message}`);

        const that = this;
        this.app.use(morgan('dev', {
            stream: {
                write(string) {
                    that.logger.debug(string.trim());
                }
            }
        }));

        this.setupControllers();
    }

    private setupControllers() {
        super.addControllers(new RootController());
    }

    public start(port: number) {
        this.app.listen(port, () => {
            this.logger.info('Server listening on port {port}', { port });
        });
    }
}