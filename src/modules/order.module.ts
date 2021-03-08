import { Module } from '@nestjs/common';
import { OrderService } from '../services';
import { OrderResolver } from '../resolvers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from '../entities';

@Module({
  imports:[TypeOrmModule.forFeature([OrderEntity])],
  providers: [OrderService, OrderResolver]
})
export class TaskModule {}
