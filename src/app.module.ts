import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from "@nestjs/graphql";
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ArticleModule } from './article/article.module';
import { Article } from './article/article';
@Module({
  imports: [
    UserModule,
    PrismaModule,
    GraphQLModule.forRoot({
      debug: process.env.NODE_ENV !== 'production',
      playground: process.env.NODE_ENV !== 'production',
      autoSchemaFile: true 
    }),
    ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService, Article],
})
export class AppModule {}
