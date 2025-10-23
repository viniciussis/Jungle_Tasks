import { EnvSchema } from './env.schema';

export const configuration = (env: EnvSchema) => ({
  hostname: env.APP_HOSTNAME,
  port: env.HTTP_PORT,
  environment: env.NODE_ENV,
  tokens: {
    accessTokenSecret: env.ACCESS_TOKEN_SECRET,
    accessTokenExpiration: env.ACCESS_TOKEN_EXPIRATION,
    refreshTokenSecret: env.REFRESH_TOKEN_SECRET,
    refreshTokenExpiration: env.REFRESH_TOKEN_EXPIRATION,
  },
  redis: {
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
  },
});

export type AppConfig = ReturnType<typeof configuration>;
