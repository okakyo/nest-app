import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './modules/user.module';
import { TypeOrmModule ,TypeOrmModuleOptions} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TaskModule } from './modules/task.module';
import ormConfig  from './commons/config/ormconfig';
import ormconfigLocal from './commons/config/ormconfig.local';

const config = process.env.NODE_ENV==="development"?ormconfigLocal:ormConfig
console.log(config)
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
