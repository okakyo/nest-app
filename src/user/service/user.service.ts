import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../dto/getters/user.entity';
import { InputUserValue } from '../dto/setters/InputUser.dto';



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}
    public async users():Promise<User[]>{
        // TODO: ここに SQL の操作を扱うコードを実装する

        return this.userRepository.find()
    }

    public async user(id:number):Promise<User>{
        return this.userRepository.findOne(id)
    }

    public async createUser(data:InputUserValue):Promise<User>{
        const  user = new User()
        user.id=data.id
        user.name=data.name
        user.email=data.email
        return this.userRepository.save(user);
    }
    
    public async deleteUserById(id:number){
        return await this.userRepository.delete(id)
    }

}
