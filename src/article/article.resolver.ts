import {Args, Mutation, Query,Resolver} from "@nestjs/graphql";
import { ArticleService } from "./article.service";
import { CreateArticleInput } from "./dto/inputs/createArticle.input";
import { UpdateArticleInput } from "./dto/inputs/updateArticle.input";
import { ArticleEntity } from "./models/article.model";

@Resolver('article')
export class ArticleResolver {
    constructor(private articleService: ArticleService) {}

    @Query(()=>[ArticleEntity],{defaultValue:[]})
    async articles(@Args("userId") userId:string):Promise<ArticleEntity[]>{
        return this.articleService.findAllArticlesByUserId(userId)
    }

    @Query(()=>ArticleEntity,{nullable:true})
    async article(@Args("id") id:string):Promise<ArticleEntity|null>{
        return this.articleService.findOneArticle({id});
    }

    @Mutation(()=>ArticleEntity,{nullable:true})
    async createArticle(@Args("data") data:CreateArticleInput){
        const {title,isPublished,content,authorId,description} =data;
        return this.articleService.createArticle({
            title,
            isPublished,
            content,
            description,
            author: {
               connect:{
                   id:authorId
               }
           }
        })
    }

    @Mutation(()=>ArticleEntity,{nullable:true})
    async updateArticle(@Args("data") data:UpdateArticleInput){

        const {id,title,isPublished,content,authorId} =data;
        return this.articleService.updateArticle({
            where:{
                id
            },
            data:{
                title,
                isPublished,
                content,
                author:{
                    connect:{
                        id:authorId
                    }
                }
            }
        })
    }

    @Mutation(()=>ArticleEntity,{nullable:true})
    async deleteArticle(@Args("id") id:string){
        return this.articleService.deleteArticle({
            id
        })
    }

}
