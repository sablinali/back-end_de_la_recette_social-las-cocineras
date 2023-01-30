import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { ListaCompraService } from './lista_compra.service';
import { CreateListaCompraDto } from './dto/create-lista_compra.dto';
import { UpdateListaCompraDto } from './dto/update-lista_compra.dto';
import { ListaCompra } from './entities/lista_compra.entity';

@Controller('lista-compra')
export class ListaCompraController {
  constructor(private readonly listaCompraService: ListaCompraService) {}

  @Post(':id_usuario')
  createListaCompra(
    @Param('id_usuario') id_usuario: number,
    @Body() createListaCompraDto: CreateListaCompraDto
  ) {
    return this.listaCompraService.createListaCompra(
      createListaCompraDto,
      id_usuario
    );
  }

  @Get()
  findAll() {
    return this.listaCompraService.findAll();
  }

  @Get(':id_usuario')
  findByUserId(@Param('id_usuario') id_usuario: number) {
    return this.listaCompraService.findByUserId(id_usuario);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateListaCompraDto: UpdateListaCompraDto
  ) {
    return this.listaCompraService.update(+id, updateListaCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaCompraService.remove(+id);
  }
}
