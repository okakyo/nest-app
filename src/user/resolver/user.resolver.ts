import { Resolver,Query,Args, Mutation } from '@nestjs/graphql';
import {User} from "../models/user.model";
import {UserService} from '../service/user.service';


@Resolver('user')
export class UserResolver {
    constructor(
        private readonly UserService:UserService,
        
    ){}
    @Query(returns=>[User],{name:"user",nullable:true})
    async users():Promise<User[]>{
        return this.UserService.users();
    }
    @Mutation(returns =>[User])
    async createUsers():Promise<string>{
        return "Success"
    }
}



