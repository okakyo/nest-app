import { getLeadingCommentBlock } from "@graphql-tools/utils";
import { Field,  InputType, Int } from "@nestjs/graphql";
import { IsArray, IsBoolean, IsIn, IsInt, Length } from "class-validator";

@InputType()
export class UpdateArticleInput{

    @Field(type=>Int,{nullable:true})
    id:string

    @Field({nullable:true})
    @Length(0,100)
    title?:string

    @Field({nullable:true})
    authorId?:string

    @Field({nullable:true})
    @IsBoolean()
    isPublished?:boolean

    @Field({nullable:true})
    thumbnail?:string

    @Field({nullable:true})
    @Length(300)
    content?:string

}

