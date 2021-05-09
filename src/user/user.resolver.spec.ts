import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';

describe('UserController', () => {
  let controller: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserResolver],
    }).compile();

    controller = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
