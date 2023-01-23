import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  @Delete(':recetaId')
  deleteReceta(@Param('recetaId') recetaId: number){
    return this.recetaService.deleteReceta(recetaId)
  }

  @Put(':recetaId')
  updateReceta(@Body() body: any, @Param('recetaId') recetaId: number) {
    const newReceta: any = body; 
    return this.recetaService.updateReceta(recetaId, newReceta)
  }

}
