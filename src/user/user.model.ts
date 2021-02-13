import { ObjectType, Field, ID} from "@nestjs/graphql";
import { IsEmail } from "class-validator";

@ObjectType()
export class User {
    @Field(type=>ID)
    id:string;

    @Field({nullable:false})
    name: string;

    @IsEmail()
    @Field({nullable:false})
    email: string

    @Field({nullable:true})
    introduction?:string 
    
}
