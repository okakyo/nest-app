import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './services/app.service';
import {GraphQLModule} from "@nestjs/graphql";
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:"schema,gql",

    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
