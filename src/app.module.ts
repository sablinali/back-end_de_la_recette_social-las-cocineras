import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredienteService } from './ingrediente/ingrediente.service';
import { IngredienteController } from './ingrediente/ingrediente.controller';

@Module({
  imports: [],
  controllers: [AppController, IngredienteController],
  providers: [AppService, IngredienteService],
})
export class AppModule {}
