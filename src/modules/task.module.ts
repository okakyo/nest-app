import { Module } from '@nestjs/common';
import { TaskService } from '../services/task/task.service';
import { TaskResolver } from '../resolvers/task/task.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../entities/task/task.entity';
import { User } from '../entities/user/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Task])],
  providers: [TaskService, TaskResolver]
})
export class TaskModule {}
