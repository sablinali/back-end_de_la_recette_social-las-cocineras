import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from 'utilities/jwt.strategy';
import { AuthService } from './auth.service';
import { LoginController } from './login.controller';
import { JwtAuthGuard } from './guards/jwt-auth.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'palabra secreta',
      signOptions: { expiresIn: '24h' },
    }),
    UsersModule,
  ],
  controllers: [LoginController],
  providers: [JwtStrategy, AuthService, JwtAuthGuard, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
