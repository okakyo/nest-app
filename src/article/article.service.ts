import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service"
import {Prisma,Article} from "@prisma/client"

@Injectable()
export class ArticleService {

    constructor(private prisma:PrismaService){}

    
    async findAllArticlesByUserId(userId:string):Promise<Article[]>{
        return this.prisma.article.findMany({
            where:{
                authorId:userId
            }
        });
    }

    async findOneArticle(where:Prisma.ArticleWhereUniqueInput):Promise<Article|null>{
        return this.prisma.article.findUnique({
            where:where,
            include:{
                author:true
            }
        })
    }

    async createArticle(data:Prisma.ArticleCreateInput):Promise<Article>{
        return this.prisma.article.create({
            data
        });
    }
    async updateArticle(params: {
        where: Prisma.ArticleWhereUniqueInput;
        data: Prisma.ArticleUpdateInput;
      }):Promise<Article>{
          const {where,data} = params;
        return this.prisma.article.update({
            where,
            data
        });
    }
    async deleteArticle(where:Prisma.ArticleWhereUniqueInput):Promise<Article>{
        return this.prisma.article.delete({
            where:where
        })
    }
}
