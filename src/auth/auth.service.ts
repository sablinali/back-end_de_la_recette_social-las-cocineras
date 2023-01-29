import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { IUser } from 'src/users/interfaces/user.interface';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    nombre_usuario: string,
    contraseña_registro: string,
  ): Promise<IUser> {
    try {
      const user = await this.userService.findOneByNombreUsuario(
        nombre_usuario,
      );
      
      if (user && user.contraseña_registro === contraseña_registro) {
        const { contraseña_registro, ...result } = user;
        return result;
      }
      return null;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async login(user: User) {
    try {
      const validateUser = await this.validateUser(
        user.nombre_usuario,
        user.contraseña_registro,
      );
      const payload = {
        nombre_usuario: validateUser.nombre_usuario,
        sub: validateUser.id_registro,
      };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
