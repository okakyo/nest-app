import { Test, TestingModule } from '@nestjs/testing';
import { OrderResolver } from './order.resolver';
import {OrderService} from "../../services";
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from '../../entities';

describe('TaskResolver', () => {
  let resolver: OrderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderResolver,
        OrderService,
        {
          provide: getRepositoryToken(OrderEntity),
          useValue:{}
        }
      ],
    }).compile();

    resolver = module.get<OrderResolver>(OrderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
