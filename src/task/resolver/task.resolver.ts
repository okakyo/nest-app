import { Args, Resolver,Query, Mutation } from '@nestjs/graphql';
import { User } from '../../user/dto/getters/user.entity';
import { Task } from '../dto/getter/task.entity';
import { inputTask } from '../dto/setter/InputTaskForm';
import { TaskService } from '../service/task.service';

@Resolver()
export class TaskResolver {
    constructor(
        private readonly taskService:TaskService
    ){}

    @Query(of=>[Task],{name:"tasks",defaultValue:[]})
    public async tasks(
        @Args('userId') userId:number
    ):Promise<Task[]>{
        return this.taskService.findAllTasksByUserId(userId);
    };

    @Query(of=>Task,{name:"task",nullable:true})
    public async task(
        @Args('taskId') taskId:number
    ):Promise<Task>{
        return this.taskService.findOneByTaskId(taskId);
    }

    @Mutation(returns=>Task,{nullable:false})
    public async createTask(
        @Args('userId') userId:number,
        @Args('task') task:inputTask
    ):Promise<Task> {
        const author = new User()
        let setTask = new Task()
        author.id=userId;
        setTask = {
            ...task,
            author
        }
        return this.taskService.saveTask(setTask);
    }
}
