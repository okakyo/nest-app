import { Module } from '@nestjs/common';
import { TypeOrmModule ,TypeOrmModuleOptions} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import ormConfig  from './commons/config/ormconfig';
import ormconfigLocal from './commons/config/ormconfig.local';

import { AppController } from './controllers';
import { AppService } from './services';

import { UserModule,TaskModule } from './modules';


const config = process.env.NODE_ENV==="development"?ormconfigLocal:ormConfig
@Module({
  controllers: [AppController],
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
