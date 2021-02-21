import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user/user.entity';
import { UserResolver } from '../resolvers/user/user.resolver';
import { UserService } from '../services/user/user.service';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService]
})
export class UserModule {}
