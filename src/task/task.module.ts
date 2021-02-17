import { Module } from '@nestjs/common';
import { TaskService } from './service/task.service';
import { TaskResolver } from './resolver/task.resolver';

@Module({
  providers: [TaskService, TaskResolver]
})
export class TaskModule {}
