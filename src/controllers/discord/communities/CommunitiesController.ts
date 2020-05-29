import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('communities')
export class CommunitiesController {
    @Get('add')
    private add(req: Request, res: Response) {
        res.send('/discord/communities/add');
    }
    @Get('remove')
    private remove(req: Request, res: Response) {
        res.send('/discord/communities/remove');
    }
    @Get('promote')
    private promote(req: Request, res: Response) {
        res.send('/discord/communities/promote');
    }
    @Get('demote')
    private demote(req: Request, res: Response) {
        res.send('/discord/communities/demote');
    }
}