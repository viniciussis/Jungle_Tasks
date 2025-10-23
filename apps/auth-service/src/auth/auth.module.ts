import { AppConfigModule } from 'src/config/config.module';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [AppConfigModule],
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}
