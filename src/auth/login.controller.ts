import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';

@Controller()
export class LoginController {
  constructor(private authService: AuthService) {}
  @Post('auth/login')
  async login(@Body() user: any) {
    return this.authService.login(user);
  }
}
