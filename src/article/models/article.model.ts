import { Field,  ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ArticleEntity {
    @Field()
    id?:string; 

    @Field()
    title: string; 

    @Field({nullable:true})
    thumbnail?:string;

    @Field({nullable:true})
    description?: string;

    @Field({nullable:true})
    isPublished?: boolean

    @Field()
    content:string;

    @Field()
    authorId:string
}
