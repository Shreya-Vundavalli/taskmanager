import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { TasksService } from '../tasks/tasks.service'; // Import TasksService for task-related operations

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // IoC

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() data: { name: string; email: string }) {
    return this.usersService.create(data);
  }
}

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll() {
    return this.tasksService.findAll();
  }

  @Post()
  async create(@Body() data: { title: string; userId: number; categoryIds?: number[] }) {
    return this.tasksService.create(data);
  }
}