import { Module } from '@nestjs/common';
import { TaskService } from './service/task.service';
import { TaskResolver } from './resolver/task.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './dto/getter/task.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Task])],
  providers: [TaskService, TaskResolver]
})
export class TaskModule {}
