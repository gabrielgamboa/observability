import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { log } from 'src/infra/logger';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async list(): Promise<any> {
    const users = await this.userService.list();
    log.info(`Usuários encontrados: ${JSON.stringify(users)}`);
    return users;
  }
}
