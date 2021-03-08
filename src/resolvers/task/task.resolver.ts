import { Args, Resolver,Query, Mutation } from '@nestjs/graphql';
import { UserEntity,OrderEntity } from '../../entities';
import { inputTask } from '../../dto/setter/task/InputTaskForm';
import { TaskService } from '../../services';
import { UseGuards } from '@nestjs/common';
import { GraphqlAuthGuard } from 'src/commons/auth';

@Resolver()
export class TaskResolver {
    constructor(
        private readonly taskService:TaskService
    ){}

    @UseGuards(GraphqlAuthGuard)
    @Query(of=>[OrderEntity],{name:"tasks",defaultValue:[]})
    public async tasks(
        @Args('userId') userId:string
    ):Promise<OrderEntity[]>{
        return this.taskService.findAllTasksByUserId(userId);
    };
    
    @UseGuards(GraphqlAuthGuard)
    @Query(of=>OrderEntity,{name:"task",nullable:true})
    public async task(
        @Args('taskId') taskId:number
    ):Promise<OrderEntity>{
        return this.taskService.findOneByTaskId(taskId);
    }

    @UseGuards(GraphqlAuthGuard)
    @Mutation(returns=>OrderEntity,{nullable:false})
    public async createTask(
        @Args('userId') userId:string,
        @Args('task') task:inputTask
    ):Promise<OrderEntity> {
        const author = new UserEntity()
        let setTask = new OrderEntity()
        author.id=userId;
        setTask = {
            ...task,
            servicer:author
        }
        return this.taskService.saveTask(setTask);
    }
}
