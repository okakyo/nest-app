import { InputType,Field } from "@nestjs/graphql";
import { IsEmail, IsInt, IsNotEmpty, MaxLength } from "class-validator";

@InputType()
export class InputUserValue {
    
    @Field({nullable:true})
    @IsInt()
    readonly id?:number

    @Field()
    @IsNotEmpty()
    readonly name:string

    @Field()
    @IsNotEmpty()
    @IsEmail()
    readonly email:string

    @Field()
    @MaxLength(100)
    readonly introduction?:string

}