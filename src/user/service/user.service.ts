import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';



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

    public async createUser():Promise<User>{
        return this.userRepository.create()
    }
    
    public async updateUser(data:User):Promise<User>{
        return this.userRepository.save(data)
    }
    public async deleteUserById(id:number){
        return await this.userRepository.delete(id)
    }

}
