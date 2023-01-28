import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecetaService } from './receta/receta.service';
import { RecetaController } from './receta/receta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecetaModule } from './receta/receta.module';
import { configService } from 'config/config.service';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { LoginController } from './auth/login.controller';
import { IngredienteModule } from './ingrediente/ingrediente.module';
import { ListaCompraModule } from './lista_compra/lista_compra.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    RecetaModule,
    UsersModule,
    IngredienteModule,
    ListaCompraModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
