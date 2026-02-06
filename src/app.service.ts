import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { User } from './users/users.entity';

@Injectable()
export class AppService {
  constructor(private readonly em: EntityManager) {} // Injected via IoC

  async createUser(): Promise<string> {
    const user = new User();
    user.name = 'Test User';
    user.email = 'test@example.com';
    await this.em.persistAndFlush(user); // Insert into DB
    return 'User created!';
  }
}