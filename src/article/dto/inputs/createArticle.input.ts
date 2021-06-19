import { Field, InputType, Int } from "@nestjs/graphql";
import {  IsBoolean, IsInt, Length } from "class-validator";

@InputType()
export class CreateArticleInput{

    @Field()
    @Length(0,100)
    title:string

    @Field()
    authorId:string 

    @Field({nullable:true})
    @IsBoolean()
    isPublished?:boolean


    @Field({nullable:true})
    description:string

    @Field()
    @Length(300)
    content:string


}