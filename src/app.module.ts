import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule ,TypeOrmModuleOptions} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import * as redisStore from 'cache-manager-redis-store';

import { UserModule,TaskModule } from './modules';
import { AppService } from './services';
import { AppController , ImagesController } from './controllers';

import {ormConfig,ormconfigLocal} from './commons/config';
import { AuthModule } from './modules/auth.module';


const config = process.env.NODE_ENV==="development"?ormconfigLocal:ormConfig
@Module({
  controllers: [AppController, ImagesController],
  providers: [AppService],
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql',
      
    }),
    TypeOrmModule.forRoot(config as TypeOrmModuleOptions),
    CacheModule.register({
      store:redisStore,
      host:'redis',
      port:6379
    }),
    UserModule,
    TaskModule,
    AuthModule,
   ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
