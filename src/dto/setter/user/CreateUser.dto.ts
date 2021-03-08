import { InputType,Field } from "@nestjs/graphql";
import { IsEmail, IsInt, IsNotEmpty, IsPhoneNumber, IsUrl, MaxLength } from "class-validator";

@InputType()
export class CreateUserDto {
    
    @Field({nullable:false})
    @IsNotEmpty()
    readonly id:string

    @Field({nullable:false})
    @IsNotEmpty()
    readonly name:string

    @Field({nullable:false})
    @IsUrl()
    readonly thumbnail?:string

    @Field({nullable:false})
    @IsNotEmpty()
    @IsEmail()
    readonly email:string

    @Field({nullable:true})
    @MaxLength(100)
    readonly introduction?:string

    @Field({nullable:true})
    @IsPhoneNumber()
    readonly phone?:string

}