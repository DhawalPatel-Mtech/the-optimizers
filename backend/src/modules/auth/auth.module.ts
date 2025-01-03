import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from '../users/users.module';
import { DatabaseModule } from 'src/shared/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      privateKey: Buffer.from(process.env.JWT_PRIVATE_KEY, 'base64').toString(
        'utf-8',
      ),
      publicKey: Buffer.from(process.env.JWT_PUBLIC_KEY, 'base64').toString(
        'utf-8',
      ),
      signOptions: {
        algorithm: 'RS256',
        expiresIn: process.env.JWT_TOKEN_EXPIRY_TIME,
      },
    }),
    UsersModule,
    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
