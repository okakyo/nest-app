import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities';
import { UserResolver } from '../resolvers';
import { UserService } from '../services';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  providers: [UserResolver, UserService]
})
export class UserModule {}
