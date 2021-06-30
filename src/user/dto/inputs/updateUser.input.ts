import { InputType,Field,Int, ID } from "@nestjs/graphql";
import { IsEmail, IsInt, IsPhoneNumber } from "class-validator";

@InputType()
export class UpdateUserInput {
    @Field()
    @IsInt()
    id:string 


    @Field({nullable:true})
    name?: string;

    @Field(type=>Int,{nullable:true})
    @IsInt()
    type?:number;

    @Field({nullable:true})
    fullName?: string;

    @Field({nullable:true})
    @IsPhoneNumber()
    phone?:string;

    @Field({nullable:true})
    @IsEmail()
    email?:string;

    @Field({nullable:true})
    introduction?: string;
}
