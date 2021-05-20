import { Resolver,Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import {User} from "@prisma/client"
import {UserEntity} from "./models/user.dto"


@Resolver('user')
export class UserResolver {

    constructor(private readonly userService:UserService){}
    @Query(()=>UserEntity,{nullable:true})
    async  user(@Args("id") id:number): Promise<User|null> {
        const user = await this.userService.findOneUser({
            id
        })
        return user;
    }

    @Query(()=>[UserEntity],{defaultValue:[]})
    async users():Promise<User[]> {
        return await this.userService.findUsers()
    }

    
}
