import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { TypeOrmModule ,TypeOrmModuleOptions} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import ormConfig  from './ormconfig';
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
   ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
