import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

export const getRedisConfig = (
  configService: ConfigService,
): MicroserviceOptions => {
  const host = configService.get<string>('REDIS_HOST', 'localhost');
  const port = configService.get<number>('REDIS_PORT', 6379);

  return {
    transport: Transport.REDIS,
    options: {
      host,
      port,
      retryAttempts: 5,
      retryDelay: 3000,
    },
  };
};
