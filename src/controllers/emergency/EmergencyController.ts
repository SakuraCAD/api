import { RootController } from '../RootController';
import { Controller, Get } from '@overnightjs/core';
import { Response, Request } from 'express';

@Controller('emergency')
export class EmergencyController {
    @Get('911')
    private 911(req: Request, res: Response) {
        res.send('/emergency/911');
    }
    @Get('panicButton')
    private panicButton(req: Request, res: Response) {
        res.send('/emergency/panicButton');
    }
}