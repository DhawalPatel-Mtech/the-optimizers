import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/modules/users/users.service';

const configService = new ConfigService();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Buffer.from(
        configService.get<string>('JWT_PUBLIC_KEY'),
        'base64',
      ).toString('utf-8'),
      algorithms: ['RS256'],
      // secretOrKey: process.env.JWT_PUBLIC_KEY
    });
  }

  async validate(payload: any) {
    this.logger.log('Token payload: ', JSON.stringify(payload));
    const user = await this.userService.findById(payload.sub);
    if (!user?.id || user?.isDeleted) {
      throw new ForbiddenException('User is not active or deleted');
    }
    return user;
  }
}
