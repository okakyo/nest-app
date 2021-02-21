import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../../entities/task/task.entity';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository:Repository<Task>
    ){}
    public async findAllTasksByUserId(id:number){
        return this.taskRepository.find({
            where:{author:id}
        });
    }

    public async findOneByTaskId(id:number){
        // WARN: relations: の内容は、Entity で定義した引数(今回は'author')に依存する
        const getTaskData = await this.taskRepository.findOne(id,{relations:['author']})

        return getTaskData;
    }

    public async saveTask(task:Task){
        return this.taskRepository.save(task)
    }

    public async deleteTaskByTaskId(id:number) {
        return this.taskRepository.delete(id);
    }


}
