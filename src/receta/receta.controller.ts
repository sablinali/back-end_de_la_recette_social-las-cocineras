import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RecetaService } from './receta.service';

@Controller('receta')
export class RecetaController {
  constructor(private readonly recetaService: RecetaService) {}

  @Get()
  findAll() {
    return this.recetaService.findAll();
  }

  @Get(':recetaId')
  findReceta(@Param('recetaId') recetaId: number) {
    return this.recetaService.findReceta(recetaId);
  }

  @Post()
  createReceta(@Body() body) {
    const newReceta: any = body;
    return this.recetaService.createReceta(newReceta);
  }
}
