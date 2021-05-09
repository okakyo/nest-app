import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from "@nestjs/graphql";
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [
    UserModule,
    PrismaModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: true 
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
