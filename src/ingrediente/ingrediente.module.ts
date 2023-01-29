import { Module } from '@nestjs/common';
import { IngredienteService } from './ingrediente.service';
import { IngredienteController } from './ingrediente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'utilities/auth.module';
import { Ingrediente } from './entities/ingrediente.entity';
import { Receta } from 'src/receta/entities/receta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingrediente, Receta]), AuthModule],
  controllers: [IngredienteController],
  providers: [IngredienteService]
})
export class IngredienteModule {}
