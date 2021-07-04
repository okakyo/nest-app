import { Resolver,Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import {User} from "@prisma/client"
import {UserEntity} from "./models/user.dto"
import { CreateUserInput } from './dto/inputs/createUser.input';
import { UpdateUserInput } from './dto/inputs/updateUser.input';
import { FindAllUserArgs } from './dto/args/findAllUser.dto';

@Resolver('user')
export class UserResolver {

    constructor(private readonly userService:UserService){}
    @Query(()=>UserEntity,{nullable:true})
    async  user(@Args("id") id:string): Promise<User|null> {
        const user = await this.userService.findOneUser({
            id
        })
        return user;
    }

    @Query(()=>[UserEntity],{defaultValue:[]})
    async users(@Args("option",{nullable:true}) option:FindAllUserArgs):Promise<User[]> {
        const {skip,take} =option
        return await this.userService.findUsers({
            skip,
            take,
        })
    }

    @Mutation(()=>UserEntity)
    async createUser(@Args("data") data:CreateUserInput):Promise<User|null>{
        const {name,type,email,fullName,introduction} = data;

        return await this.userService.createUser({
            name:name,
            type:type,
            introduction:{
                create:{
                    email,
                    fullName,
                    bio:introduction
                }
            }
        })
    }
    @Mutation(()=>UserEntity)
    async updateUser(@Args("data") data:UpdateUserInput):Promise<User|null>{
        const {id,name,type,email,fullName,introduction} = data;

        // TODO: UserID を自動で生成するように設定する
        return await this.userService.updateUser({
            where:{
                id:id
            },
            data:{
                name:name,
                type:type,
                introduction:{
                    update:{
                        email:email,
                        fullName:fullName,
                        bio:introduction
                    }
                }
            }
        })
    }

    @Mutation(()=>UserEntity)
    async deleteUser(@Args("id") id:string):Promise<User|null>{
        return await this.userService.deleteUser(
            {
                id:id    
            }
        )
    }
}
