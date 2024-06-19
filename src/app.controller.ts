import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { getPing } from './global.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ping')
  getPing(): getPing {
    return this.appService.getPing();
  }
}
