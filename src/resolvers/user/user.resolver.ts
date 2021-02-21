import { Resolver,Query,Args, Mutation } from '@nestjs/graphql';
import {UserEntity} from "../../entities/user/user.entity";
import { InputUserValue } from '../../dto/setter/user/InputUser.dto';
import {UserService} from '../../services/user/user.service';


@Resolver('user')
export class UserResolver {
    constructor(
        private UserService:UserService,
    ){}

    @Query(of=>[UserEntity],{name:"users",nullable:true})
    async users():Promise<UserEntity[]>{
        return await this.UserService.users();
    }

    @Query(of=>UserEntity,{nullable:true})
    async user(
        @Args('id') id:number
    ):Promise<UserEntity>{
        return this.UserService.user(id)
    }

    @Mutation(returns =>UserEntity)
    async saveUser(
        @Args('user') user:InputUserValue
    ):Promise<UserEntity>{
        const userData = await this.UserService.createUser(user)
        return userData;
    }

    @Mutation((returns) =>UserEntity, { nullable: true })
    async deleteUser(
        @Args('id') id:number
    ){                                                      
        return await this.UserService.deleteByUserId(id)
    }

}



