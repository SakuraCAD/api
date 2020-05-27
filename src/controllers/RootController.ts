import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('')
export class RootController {
    @Get()
    private test(req: Request, res: Response) {
        res.send('test');
    }
}