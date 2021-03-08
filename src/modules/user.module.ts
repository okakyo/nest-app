import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetailEntity, UserEntity } from '../entities';
import { UserResolver } from '../resolvers';
import { UserService } from '../services';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity,UserDetailEntity])],
  providers: [UserResolver, UserService]
})
export class UserModule {}
