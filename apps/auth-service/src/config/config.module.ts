import { configuration } from './configuration';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env.schema';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (env) => {
        const parsed = envSchema.safeParse(env);
        if (!parsed.success) {
          console.error('❌ Erro ao validar variáveis de ambiente:');
          console.error(parsed.error.format());
          process.exit(1);
        }

        return parsed.data;
      },
      load: [() => configuration(envSchema.parse(process.env))],
    }),
  ],
})
export class AppConfigModule {}
