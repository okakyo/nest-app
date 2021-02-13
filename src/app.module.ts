import { Module } from '@nestjs/common';
import { AppController } from './controllers/apps/app.controller';
import { AppService } from './services/apps/app.service';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { UsersModule } from './modules/users/users.module';
import { CacheModule } from './modules/cache/cache.module';
import { CacheService } from './services/cache/cache.service';
import { CacheController } from './controllers/cache/cache.controller';

@Module({
  
  controllers: [AppController, UsersController, CacheController],
  providers: [AppService, UsersService, CacheService],
  imports: [UsersModule, CacheModule],
})
export class AppModule {}
