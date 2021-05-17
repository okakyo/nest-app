import {Resolver} from "@nestjs/graphql";
import { ArticleService } from "./article.service";

@Resolver('article')
export class ArticleResolver {
    constructor(private article: ArticleService) {}

    findAllArticles({}){}

}
