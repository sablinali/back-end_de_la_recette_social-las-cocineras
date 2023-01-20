import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecetaService } from './receta/receta.service';
import { RecetaController } from './receta/receta.controller';

@Module({
  imports: [],
  controllers: [AppController, RecetaController],
  providers: [AppService, RecetaService],
})
export class AppModule {}
