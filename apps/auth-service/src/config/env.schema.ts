import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  HTTP_PORT: z.coerce.number().default(3000),
  APP_HOSTNAME: z.string().default('localhost'),

  ACCESS_TOKEN_SECRET: z
    .string()
    .min(10, 'ACCESS_TOKEN_SECRET deve ter pelo menos 10 caracteres'),
  ACCESS_TOKEN_EXPIRATION: z.string().default('15m'),

  REFRESH_TOKEN_SECRET: z
    .string()
    .min(10, 'REFRESH_TOKEN_SECRET deve ter pelo menos 10 caracteres'),
  REFRESH_TOKEN_EXPIRATION: z.string().default('7d'),

  REDIS_HOST: z.string().default('localhost'),
  REDIS_PORT: z.coerce.number().default(6379),
});

export type EnvSchema = z.infer<typeof envSchema>;
