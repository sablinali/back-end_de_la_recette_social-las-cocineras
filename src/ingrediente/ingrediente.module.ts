import { Module } from '@nestjs/common';
import { IngredienteService } from './ingrediente.service';
import { IngredienteController } from './ingrediente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'utilities/auth.module';
import { Ingrediente } from './entities/ingrediente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingrediente]), AuthModule],
  controllers: [IngredienteController],
  providers: [IngredienteService]
})
export class IngredienteModule {}
