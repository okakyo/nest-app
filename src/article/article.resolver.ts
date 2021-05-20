import { Query } from "@nestjs/common";
import {Args, Mutation, Resolver} from "@nestjs/graphql";
import { ArticleService } from "./article.service";

@Resolver('article')
export class ArticleResolver {
    constructor(private article: ArticleService) {}

    async findAllArticles(){
        return this.article
    }
    async findOneArticle(){
        return this.article
    }
    async createArticle(){
        return this.article
    }
    async updateArticle(){
        return this.article
    }
    async deleteArticle(@Args("id") id:number){
        return this.article
    }

}
