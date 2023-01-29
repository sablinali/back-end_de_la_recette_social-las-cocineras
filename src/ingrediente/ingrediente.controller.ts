import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredienteService } from './ingrediente.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { Ingrediente } from './entities/ingrediente.entity';

@Controller('ingrediente')
export class IngredienteController {
  constructor(private readonly ingredienteService: IngredienteService) {}

  @Post()
  createIngrediente(@Body() createIngredienteDto: CreateIngredienteDto) {
    return this.ingredienteService.createIngrediente(createIngredienteDto);
  }

  @Get()
  findAll(): Promise<Ingrediente[]> {
    return this.ingredienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredienteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIngredienteDto: UpdateIngredienteDto,
  ) {
    return this.ingredienteService.update(+id, updateIngredienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredienteService.remove(+id);
  }
}
