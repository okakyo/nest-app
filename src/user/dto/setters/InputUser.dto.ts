import { InputType,Field,ObjectType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@InputType()
export class InputUserValue {
    
    @Field({nullable:true})
    id?:string

    @Field()
    @IsNotEmpty()
    name:string

    @Field()
    @IsNotEmpty()
    @IsEmail()
    email:string
    
}