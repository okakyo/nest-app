import { Module } from '@nestjs/common';
import { TaskService } from '../services';
import { TaskResolver } from '../resolvers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from '../entities';

@Module({
  imports:[TypeOrmModule.forFeature([TaskEntity])],
  providers: [TaskService, TaskResolver]
})
export class TaskModule {}
