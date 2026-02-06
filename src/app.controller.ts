import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} // IoC injection

  @Get('create-user')
  async createUser() {
    return this.appService.createUser();
  }
}