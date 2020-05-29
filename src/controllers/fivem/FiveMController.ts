import { RootController } from '../RootController';
import { Controller, Get, ChildControllers } from '@overnightjs/core';
import { Response, Request } from 'express';
import { UserController } from './user/UserController';
import Logger from 'untitled-logging-library';
import * as constants from '../../constants';

@Controller('fivem')
@ChildControllers([
    new UserController()
])
export class FiveMController {
    private logger: Logger;

    constructor() {
        this.logger = new Logger('/fivem', constants.loggerFormat);
    }

    @Get('checkClientStatus')
    private checkClientStatus(req: Request, res: Response) {
        this.logger.info('client status check!');
        res.send('/fivem/checkClientStatus');
    }
    @Get('authorities')
    private authorities(req: Request, res: Response) {
        res.send('/fivem/authorities');
    }
}