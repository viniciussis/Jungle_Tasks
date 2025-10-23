import { ConfigRootModule } from './config/config.module';
import { getRedisConfig } from './config/redis-config';
import { AuthModule } from './auth/auth.module';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const appContext =
    await NestFactory.createApplicationContext(ConfigRootModule);
  const configService = appContext.get(ConfigService);

  const redisConfig = getRedisConfig(configService);

  const app = await NestFactory.createMicroservice(AuthModule, redisConfig);

  await app.listen();
  console.log(
    `✅ Auth microservice is running using Redis on ${redisConfig.options}:${redisConfig.options?.port}`,
  );
}
bootstrap();
