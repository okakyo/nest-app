import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 動作確認ように追加
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
