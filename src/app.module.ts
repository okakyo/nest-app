import { Module } from '@nestjs/common';
import { TypeOrmModule ,TypeOrmModuleOptions} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { UserModule,TaskModule } from './modules';
import { AppService } from './services';
import { AppController , ImagesController } from './controllers';

import {ormConfig,ormconfigLocal} from './commons/config';


const config = process.env.NODE_ENV==="development"?ormconfigLocal:ormConfig
@Module({
  controllers: [AppController, ImagesController],
  providers: [AppService],
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql'
    }),
    TypeOrmModule.forRoot(config as TypeOrmModuleOptions),
    UserModule,
    TaskModule,
   ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
