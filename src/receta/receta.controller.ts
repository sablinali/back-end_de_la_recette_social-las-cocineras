import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { RecetaService } from './receta.service';
import { Request } from 'express';
import { RecetaDto } from './dtos/receta.dto';
import { Receta } from './entities/receta.entity';

@Controller('receta')
export class RecetaController {
  constructor(private readonly recetaService: RecetaService) {}

  @Get()
  findAll(): Promise<Receta[]> {
    return this.recetaService.findAll();
  }

  @Get(':recetaId')
  findReceta(@Param('recetaId') recetaId: number): Promise<Receta> {
    return this.recetaService.findReceta(recetaId);
  }

  @Post()
  createReceta(@Body() newReceta: RecetaDto): Promise<Receta> {
    return this.recetaService.createReceta(newReceta);
  }

  @Delete(':recetaId')
  deleteReceta(@Param('recetaId') recetaId: string){
    return this.recetaService.deleteReceta(+recetaId);
  }

  @Put(':recetaId')
  updateReceta(
    @Param('recetaId') recetaId: number,
    @Body() newReceta: RecetaDto,
  ): Promise<Receta> {
    return this.recetaService.updateReceta(recetaId, newReceta);
  }
}
