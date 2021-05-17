import { Test, TestingModule } from '@nestjs/testing';
import { ArticleResolver } from './article.controller';

describe('ArticleResolver', () => {
  let resolver: ArticleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleResolver],
    }).compile();

    resolver = module.get<ArticleResolver>(ArticleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
