import { Resolver,Query,Args, Mutation,Context,Info,ID } from '@nestjs/graphql';
import {User} from "../dto/getters/user.entity";
import { InputUserValue } from '../dto/setters/InputUser.dto';
import {UserService} from '../service/user.service';


@Resolver('user')
export class UserResolver {
    constructor(
        private UserService:UserService,
    ){}
    @Query(of=>[User],{name:"users",nullable:true})
    async users():Promise<User[]>{
        return await this.UserService.users();
    }
    

    @Mutation(returns =>[User])
    async saveUser(
        @Args('user') user:InputUserValue
    ):Promise<User>{
        
        const userData = await this.UserService.createUser(user)
        console.log(userData);
        return userData;
    }

    @Mutation((returns) =>[User], { nullable: true })
    async deleteUser(
        @Args('id') id:number
    ){                                                      
        return await this.UserService.deleteUserById(id)
    }

}



