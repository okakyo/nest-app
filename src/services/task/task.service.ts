import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from '../../entities';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskEntity)
        private readonly taskRepository:Repository<TaskEntity>
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

    public async saveTask(task:TaskEntity){
        return this.taskRepository.save(task)
    }

    public async deleteTaskByTaskId(id:number) {
        return this.taskRepository.delete(id);
    }


}
