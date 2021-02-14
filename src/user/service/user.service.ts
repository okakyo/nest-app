import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    public async getUsers():Promise<User[]>{
        
        // TODO: ここに SQL の操作を扱うコードを実装する

        return  [
            {
                id:"1",
                name:"okakyo",
                email:'0622okakyo@gmail.com'
            },
            {
                id:"2",
                name:"pinky",
                email:"example@ymail.com"
            }
        ]
    }
    public async createUser():Promise<User>{
        return {
            id:"3",
            name:"black",
            email:"docks@mail.com"
        }
    }
    
    public async updateUser():Promise<User>{
        return {
            id:"3",
            name:"black",
            email:"docks@mail.com"
        }
    }

}
