import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user/user.entity';
import { InputUserValue } from '../../dto/setter/user/InputUser.dto';



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}
    public async users():Promise<User[]>{

        return  this.userRepository.find()
    }

    public async user(id:number):Promise<User>{
        return this.userRepository.findOne(id)
    }

    public async createUser(data:InputUserValue):Promise<User>{
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
