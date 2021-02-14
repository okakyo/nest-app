import {Args, ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class getUser{
    @Field()
    @IsNotEmpty()
    id:string;
    

}