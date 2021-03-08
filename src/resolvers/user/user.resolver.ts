import { Resolver,Query,Args, Mutation } from '@nestjs/graphql';
import {UserEntity} from "../../entities/user/user.entity";
import { CreateUserDto } from '../../dto/setter/user/CreateUser.dto';
import {UserService} from '../../services/user/user.service';
import { UpdateUserDto } from 'src/dto/setter/user/UpdateUser.dto';


@Resolver('user')
export class UserResolver {
    constructor(
        private UserService:UserService,
    ){}

    @Query(of=>[UserEntity],{name:"users",nullable:true})
    async users():Promise<UserEntity[]>{
        return await this.UserService.findUsers();
    }

    @Query(of=>UserEntity,{nullable:true})
    async user(
        @Args('email') email:string
    ):Promise<UserEntity>{
        return this.UserService.findOneUser(email)
    }

    @Mutation(returns =>UserEntity)
    async createUser(
        @Args('user') user:CreateUserDto
    ):Promise<UserEntity>{
        const userData = await this.UserService.createUser(user)
        return userData;
    }

    @Mutation(returns=>UserEntity)
    async updateUser(
        @Args('user') user:UpdateUserDto
    ):Promise<string|Error>{
        try {
            return await this.UserService.updateUser(user);
        } catch(e){
            throw e;
        }

    }

    @Mutation((returns) =>UserEntity, { nullable: true })
    async deleteUser(
        @Args('id') id:string
    ){          
        try {
            return await this.UserService.deleteByUserId(id)
        } catch(e){
            throw e;
        }
    }

}

