import { Resolver,Query,Args, Mutation,Context,Info,ID, ResolveField, Int } from '@nestjs/graphql';
import {User} from "../../entities/user/user.entity";
import { InputUserValue } from '../../dto/setter/user/InputUser.dto';
import {UserService} from '../../services/user/user.service';


@Resolver('user')
export class UserResolver {
    constructor(
        private UserService:UserService,
    ){}

    @Query(of=>[User],{name:"users",nullable:true})
    async users():Promise<User[]>{
        return await this.UserService.users();
    }

    @Query(of=>User,{nullable:true})
    async user(
        @Args('id') id:number
    ):Promise<User>{
        return this.UserService.user(id)
    }

    @Mutation(returns =>User)
    async saveUser(
        @Args('user') user:InputUserValue
    ):Promise<User>{
        const userData = await this.UserService.createUser(user)
        return userData;
    }

    @Mutation((returns) =>User, { nullable: true })
    async deleteUser(
        @Args('id') id:number
    ){                                                      
        return await this.UserService.deleteByUserId(id)
    }

}



