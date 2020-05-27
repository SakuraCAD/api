import { Server } from '@overnightjs/core';

import Logger from 'untitled-logging-library';
import chalk from 'chalk';

import * as Controllers from './controllers';

const logger = new Logger('api', `${chalk.gray('[{time}] [{prefix}]')} {level}{padding}{message}`);

export default class SakuraCADServer extends Server {
    constructor() {
        super();

        this.setupControllers();
    }

    private setupControllers() {
        const controllers = [new Controllers.RootController()];

        super.addControllers(controllers);
    }

    public start(port: number) {
        this.app.listen(port, () => {
            logger.info('Server listening on port {port}', { port });
        });
    }
}