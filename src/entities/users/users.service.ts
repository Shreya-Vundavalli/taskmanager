import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { User } from './users.entity';
import { Task } from '../tasks/tasks.entity';

@Injectable()
export class UsersService {
  constructor(private readonly em: EntityManager) {} // IoC injection

  async findAll(): Promise<User[]> {
    return this.em.find(User, {}); // Basic query: SELECT * FROM users
  }

  async findOne(id: number): Promise<User | null> {
    return this.em.findOne(User, { id }, { populate: ['tasks'] }); // Populate relations (eager load tasks)
  }

  async create(data: { name: string; email: string }): Promise<User> {
    const user = new User();
    user.name = data.name;
    user.email = data.email;
    await this.em.persistAndFlush(user);
    return user;
  }
}