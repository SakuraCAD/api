import { Controller, Get, ChildControllers, ClassWrapper } from '@overnightjs/core';
import { Request, Response } from 'express';
import { EmergencyController } from './emergency/EmergencyController';
import { FiveMController } from './fivem/FiveMController';
import { DiscordController } from './discord/DiscordController';

import asyncHandler from 'express-async-handler'

import * as constants from '../constants';
import Logger from 'untitled-logging-library';

@Controller('')
@ChildControllers([
    new EmergencyController(),
    new FiveMController(),
    new DiscordController()
])
@ClassWrapper(asyncHandler)
export class RootController {
    private logger: Logger;

    constructor() {
        this.logger = new Logger('/', constants.loggerFormat);
    }

    @Get()
    private ping(req: Request, res: Response) {
        res.send({ pong: true });
    }
}