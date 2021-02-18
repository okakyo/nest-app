import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../dto/getter/task.entity';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository:Repository<Task>
    ){}
    public async findAllTasksByUserId(id:number){
        return this.taskRepository.find();
    }

    public async findOneByTaskId(id:number){
        return this.taskRepository.findOne(id);
    }

    public async saveTask(task:Task){
        return this.taskRepository.save(task)
    }

    public async deleteTaskByTaskId(id:number) {
        return this.taskRepository.delete(id);
    }


}
