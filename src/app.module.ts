import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { UsersController } from './entities/users/users.controller'; // Add this import
import { TasksController } from './entities/users/users.controller'; // Add this (same file, but import both classes)
import { AppService } from './app.service';
import mikroOrmConfig from './mikro-orm.config';
import { EntitiesModule } from './entities/entity.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    EntitiesModule,
  ],
  controllers: [AppController, UsersController, TasksController], // Add both controllers here
  providers: [AppService],
})
export class AppModule {}