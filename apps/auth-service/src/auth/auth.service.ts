import { PrismaService } from 'src/database/services/prisma.service';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logId = 'auth.auth.service.';

  constructor(
    private readonly logger: Logger,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async signin(user: User) {
    const { access_token, refresh_token } = await this._getTokens(user);
    await this._updateRefreshToken(user.id, refresh_token);

    return {
      refresh_token,
      access_token,
      role: user.role,
      user_id: user.id,
    };
  }

  async refreshTokens(username: string, refreshToken: string) {
    const user = await this.userService.searchUserByUsername(username);

    await this._validateRefreshToken(refreshToken, user);

    const { access_token, refresh_token } = await this._getTokens(user);

    await this._updateRefreshToken(user.id, refresh_token);

    return {
      access_token,
      refresh_token,
    };
  }

  async logout(username: string, refreshToken: string) {
    const user = await this.userService.searchUserByUsername(username);

    await this._validateRefreshToken(refreshToken, user);

    await this.prisma.user.update({
      where: {
        username,
      },
      data: {
        refresh_token: null,
      },
    });
  }

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userService.searchUserByUsername(username);

    if (user.status !== 'ATIVO') {
      this.logger.warn(`Inactive user: ${username}`, {
        logId: this.logId + 'validateUser',
      });
      throw new UnauthorizedException('Usuário inativo!');
    }

    const matched = await this.userService.compareData(password, user.password);

    if (!matched) {
      this.logger.warn(`Password invalid for user: ${username}`, {
        logId: this.logId + 'validateUser',
      });
      throw new UnauthorizedException('Senha ou usuário inválido!');
    }

    return user;
  }

  private async _validateRefreshToken(refreshToken: string, user: User) {
    if (!user.refresh_token) {
      this.logger.warn('Non-existent refresh token!', {
        logId: this.logId + 'refreshTokens',
      });
      throw new UnauthorizedException(
        'Token de atualização inválido ou expirado. Por favor, faça login novamente!',
      );
    }

    const matched = await this.userService.compareData(
      refreshToken,
      user.refresh_token,
    );

    if (!matched) {
      this.logger.warn(`Invalid refresh token for user: ${user.id}!`, {
        logId: this.logId + 'refreshTokens',
      });
      throw new UnauthorizedException(
        'Token de atualização inválido ou expirado. Por favor, faça login novamente!',
      );
    }
  }

  private async _updateRefreshToken(userId: string, refreshToken: string) {
    const hashedToken = await this.userService.hashData(refreshToken);

    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        refresh_token: hashedToken,
      },
    });
  }

  private async _getTokens(user: User) {
    const accessTokenPayload: JwtPayload = {
      sub: user.id,
      role: user.role,
    };

    const refreshTokenPayload: JwtRefreshPayload = {
      ...accessTokenPayload,
      username: user.username,
    };

    return {
      access_token: this.jwtService.sign(accessTokenPayload, {
        secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
        expiresIn: this.configService.get<string>('ACCESS_TOKEN_EXPIRATION'),
      }),
      refresh_token: this.jwtService.sign(refreshTokenPayload, {
        secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
        expiresIn: this.configService.get<string>('REFRESH_TOKEN_EXPIRATION'),
      }),
    };
  }
}
