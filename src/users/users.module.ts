import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './users.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [MikroOrmModule.forFeature([User])],
})
export class UsersModule {}