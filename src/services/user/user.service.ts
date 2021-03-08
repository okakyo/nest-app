import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entities';
import { CreateUserDto } from '../../dto/setter/user/CreateUser.dto';



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository:Repository<UserEntity>
    ){}
    public async findUsers():Promise<UserEntity[]>{

        return  this.userRepository.find();
    }

    public async findOneUser(userId:String):Promise<UserEntity>{
        return this.userRepository.findOne({where:{userId:userId},relations:["detail"]});
    }

    public async createUser(data:CreateUserDto):Promise<UserEntity>{
        return this.userRepository.create(data);
    }

    public async updateUser(data:UserEntity){
        try {
            await this.userRepository.update({id:data.id},data)
            return "success";
        } catch(e){
            console.error(e);
            return "ng";
        }
        
    };
    

    public async deleteByUserId(id:string){
        try {
            await this.userRepository.delete(id);
            return "success";
        } catch(e){
            console.error(e);
            return "ng";
        }
    }
}
