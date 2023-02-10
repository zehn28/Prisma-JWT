import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {

    }
    @Post('local/signup')
    signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
        this.authService.signupLocal(dto);
    }
    @Post('local/signin')
    signinLocal() {
        this.authService.signinLocal();
    }

    @Post('logout')
    logout() {
        this.authService.logout();
    }

    @Post('refresh')
    refresh() {
        this.authService.refresh();
    }
}
