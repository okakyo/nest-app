import { Args, Resolver,Query, Mutation } from '@nestjs/graphql';
import { UserEntity,TaskEntity } from '../../entities';
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
    @Query(of=>[TaskEntity],{name:"tasks",defaultValue:[]})
    public async tasks(
        @Args('userId') userId:number
    ):Promise<TaskEntity[]>{
        return this.taskService.findAllTasksByUserId(userId);
    };
    
    @UseGuards(GraphqlAuthGuard)
    @Query(of=>TaskEntity,{name:"task",nullable:true})
    public async task(
        @Args('taskId') taskId:number
    ):Promise<TaskEntity>{
        return this.taskService.findOneByTaskId(taskId);
    }

    @UseGuards(GraphqlAuthGuard)
    @Mutation(returns=>TaskEntity,{nullable:false})
    public async createTask(
        @Args('userId') userId:number,
        @Args('task') task:inputTask
    ):Promise<TaskEntity> {
        const author = new UserEntity()
        let setTask = new TaskEntity()
        author.id=userId;
        setTask = {
            ...task,
            author
        }
        return this.taskService.saveTask(setTask);
    }
}
