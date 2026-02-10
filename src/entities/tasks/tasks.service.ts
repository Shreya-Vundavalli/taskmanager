import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { Task } from './tasks.entity';
import { User } from '../users/users.entity';
import { Category } from '../categories/category.entity';

@Injectable()
export class TasksService {
  constructor(private readonly em: EntityManager) {}

  async findAll(): Promise<Task[]> {
    return this.em.find(Task, {}, { populate: ['user', 'categories'] }); // Populate all relations
  }

  async create(data: { title: string; userId: number; categoryIds?: number[] }): Promise<Task> {
    const user = await this.em.findOneOrFail(User, { id: data.userId }); // Ensure user exists
    const task = new Task();
    task.title = data.title;
    task.user = user; // Set relation
    if (data.categoryIds) {
      const categories = await this.em.find(Category, { id: { $in: data.categoryIds } });
      task.categories.set(categories); // Set M:M relation
    }
    await this.em.persistAndFlush(task);
    return task;
  }
}