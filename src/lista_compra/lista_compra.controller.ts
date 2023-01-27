import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ListaCompraService } from './lista_compra.service';
import { CreateListaCompraDto } from './dto/create-lista_compra.dto';
import { UpdateListaCompraDto } from './dto/update-lista_compra.dto';

@Controller('lista-compra')
export class ListaCompraController {
  constructor(private readonly listaCompraService: ListaCompraService) {}

  @Post()
  create(@Body() createListaCompraDto: CreateListaCompraDto) {
    return this.listaCompraService.create(createListaCompraDto);
  }

  @Get()
  findAll() {
    return this.listaCompraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listaCompraService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateListaCompraDto: UpdateListaCompraDto,
  ) {
    return this.listaCompraService.update(+id, updateListaCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaCompraService.remove(+id);
  }
}
