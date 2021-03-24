import {
  Controller,
  Post,
  UseGuards,
  Request,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService){}

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
