import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IUser } from 'src/users/interfaces/user.interface';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(
    nombre_usuario: string,
    contraseña_registro: string,
  ): Promise<IUser> {
    try {
      const user = await this.userService.findOneByNombreUsuario(
        nombre_usuario,
      );

      if (
        (user && user.contraseña_registro,
        nombre_usuario === contraseña_registro)
      ) {
        const { nombre_usuario, ...result } = user;
        return result;
      }
      return null;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
