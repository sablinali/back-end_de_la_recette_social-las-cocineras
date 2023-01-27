import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListaCompraDto } from './dto/create-lista_compra.dto';
import { UpdateListaCompraDto } from './dto/update-lista_compra.dto';
import { ListaCompra } from './entities/lista_compra.entity';

@Injectable()
export class ListaCompraService {
  constructor(
    @InjectRepository(ListaCompra)
    private listaCompraRepository: Repository<ListaCompra>,
  ) {}


  create(createListaCompraDto: CreateListaCompraDto) {
    return 'This action adds a new listaCompra';
  }

  findAll() {
    return `This action returns all listaCompra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listaCompra`;
  }

  update(id: number, updateListaCompraDto: UpdateListaCompraDto) {
    return this.listaCompraRepository.update(id, updateListaCompraDto);
  }

  remove(id: number) {
    return `This action removes a #${id} listaCompra`;
  }
}
