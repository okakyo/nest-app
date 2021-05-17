import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleResolver} from './article.controller';

@Module({
  providers: [ArticleService,ArticleResolver],
})
export class ArticleModule {}
