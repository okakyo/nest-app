import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entities';
import { InputUserValue } from '../../dto/setter/user/InputUser.dto';



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository:Repository<UserEntity>
    ){}
    public async users():Promise<UserEntity[]>{

        return  this.userRepository.find()
    }

    public async user(id:number):Promise<UserEntity>{
        return this.userRepository.findOne(id)
    }

    public async createUser(data:InputUserValue):Promise<UserEntity>{
        return this.userRepository.save({
            id:data.id,
            name:data.name,
            email:data.email,
            introduction:data.introduction
        });
    }
    
    public async deleteByUserId(id:number){
        return this.userRepository.delete(id)
    }

}
