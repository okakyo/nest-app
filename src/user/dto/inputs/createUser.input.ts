import { InputType,Field,Int } from "@nestjs/graphql";
import { IsEmail, IsInt, IsPhoneNumber } from "class-validator";

@InputType()
export class CreateUserInput {
    @Field()
    name: string;

    @Field(type=>Int,{nullable:true})
    @IsInt()
    type:number;

    @Field({nullable:true})
    fullName: string;

    @Field({nullable:true})
    @IsPhoneNumber()
    phone:string;

    @Field()
    @IsEmail()
    email:string;

    @Field({nullable:true})
    introduction: string;
}