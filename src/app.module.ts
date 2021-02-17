import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { TypeOrmModule ,TypeOrmModuleOptions} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TaskModule } from './task/task.module';
import ormConfig  from './commons/config/ormconfig';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql'
    }),
    TypeOrmModule.forRoot(ormConfig as TypeOrmModuleOptions),
    UserModule,
    TaskModule,
   ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
