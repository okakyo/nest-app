import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import {UserService} from "../../services"
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../../entities';
describe('UserResolver', () => {
  let resolver: UserResolver;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            save: jest.fn()
          },
        },
      ],
    }).compile();
    
    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
