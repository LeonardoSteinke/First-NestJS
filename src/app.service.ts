import { Injectable } from '@nestjs/common';
import { getPing } from './global.types';

@Injectable()
export class AppService {
  getPing(): getPing {
    return { message: 'Pong!' };
  }
}