import { Resolver,Query,Args, Mutation,Context,Info,ID } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import {User} from "../entity/user.entity";
import {UserService} from '../service/user.service';


@Resolver('user')
export class UserResolver {
    constructor(
        private readonly UserService:UserService,
    ){}
    @Query(of=>[User],{name:"users",nullable:true})
    async users():Promise<User[]>{
        return await this.UserService.users();
    }
    @Query((returns) => User, { nullable: true })
     async user(@Args('id') id: number) {
       return await this.UserService.user(id);
     }

    @Mutation(returns =>[User])
    async createUsers():Promise<string>{
        return "Success"
    }

    @Mutation(returns=>[User])
    async updateUsers():Promise<User>{
        return {
            id:"4",
            name:"donky",
            email:"cgus@mail4.ap.jp"
        }
    }
    @Mutation((returns) =>[User], { nullable: true })
    async deleteUser(
        @Args('id') id:number
    ){
        return await this.UserService.deleteUserById(id)
    }

}



