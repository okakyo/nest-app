import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ArticleEntity {
    @Field()
    id?:string; 

    @Field()
    title: string; 

    @Field()
    isPublished?: boolean

    @Field()
    content:string;

    @Field()
    authorId:string
}