import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from '../../entities';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly taskRepository:Repository<OrderEntity>
    ){}
    public async findAllTasksByUserId(userId:string){
        return this.taskRepository.find({
            where:{servicer:userId}
        });
    }

    public async findOneByTaskId(id:number){
        // WARN: relations: の内容は、Entity で定義した引数(今回は'author')に依存する
        const getTaskData = await this.taskRepository.findOne(id,{relations:['servicer']})

        return getTaskData;
    }

    public async saveTask(task:OrderEntity){
        return this.taskRepository.save(task)
    }

    public async deleteTaskByTaskId(id:number) {
        return this.taskRepository.delete(id);
    }


}
