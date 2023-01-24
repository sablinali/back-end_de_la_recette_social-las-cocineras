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
import { Receta } from './receta.class';

@Controller('receta')
export class RecetaController {
  constructor(private readonly recetaService: RecetaService) {}

  @Get()
  findAll(@Req() request: Request): Promise<Receta[]> {
    console.log(request.query);
    return this.recetaService.findAll(request.query);
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
  deleteReceta(@Param('recetaId') recetaId: number): Receta {
    return this.recetaService.deleteReceta(recetaId);
  }

  @Put(':recetaId')
  updateReceta(
    @Param('recetaId') recetaId: number,
    @Body() newReceta: RecetaDto,
  ): Promise<Receta> {
    return this.recetaService.updateReceta(recetaId, newReceta);
  }
}
