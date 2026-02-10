import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './users/users.entity'; // Keep this
import { Task } from './tasks/tasks.entity'; // Add this
import { Category } from './categories/category.entity'; // Add this
import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service'; // Add this
import { TasksService } from './tasks/tasks.service'; // Add this

@Module({
  imports: [MikroOrmModule.forFeature([User, Task, Category])], // Register all entities
  providers: [UsersService, TasksService], // Add services as providers
  exports: [UsersService, TasksService], // Export for use in controllers
})
export class EntitiesModule {} // Renamed from UsersModule