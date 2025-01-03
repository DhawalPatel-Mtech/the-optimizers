import { Body, Controller, Logger, Post } from '@nestjs/common';
import { LoginUserDto } from '../users/dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger();
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
}
