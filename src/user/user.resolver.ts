import { Resolver,Query,Args } from '@nestjs/graphql';
import {User} from "./user.model";
const sampleUserData = [
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


@Resolver('user')
export class UserResolver {
    @Query(returns=>[User])
    async users():Promise<User[]>{
        return sampleUserData;
    }
}
