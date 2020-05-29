import { RootController } from '../../RootController';
import { Controller, Get } from '@overnightjs/core';
import { Response, Request } from 'express';

@Controller('user')
export class UserController {
    @Get('link')
    private link(req: Request, res: Response) {
        res.send('/fivem/user/link');
    }
    @Get('unlink')
    private unlink(req: Request, res: Response) {
        res.send('/fivem/user/unlink');
    }
}