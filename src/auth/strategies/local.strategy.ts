import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'nombre_usuario' });
  }

  async validate(
    nombre_usuario: string,
    contraseña_registro: string,
  ): Promise<any> {
    const user = await this.authService.validateUser(
      nombre_usuario,
      contraseña_registro,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
