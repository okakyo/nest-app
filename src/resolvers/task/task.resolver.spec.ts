import { Test, TestingModule } from '@nestjs/testing';
import { TaskResolver } from './task.resolver';
import {TaskService} from "../../services";
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from '../../entities';

describe('TaskResolver', () => {
  let resolver: TaskResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskResolver,
        TaskService,
        {
          provide: getRepositoryToken(TaskEntity),
          useValue:{}
        }
      ],
    }).compile();

    resolver = module.get<TaskResolver>(TaskResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
