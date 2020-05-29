import { Controller, Get, ChildControllers } from '@overnightjs/core';
import { Request, Response } from 'express';
import { CommunitiesController } from './communities/CommunitiesController';

@Controller('discord')
@ChildControllers([
    new CommunitiesController()
])
export class DiscordController {}