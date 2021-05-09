import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports :[PrismaModule],
  providers: [UserService],
  controllers: [UserResolver]
})
export class UserModule {}
