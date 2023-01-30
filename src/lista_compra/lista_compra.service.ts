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


  createListaCompra(
    createListaCompraDto: CreateListaCompraDto,
    id_usuario: number
  ) {
    createListaCompraDto.id_usuario = id_usuario;
    return this.listaCompraRepository.save(createListaCompraDto);
  }

  findAll() {
    return this.listaCompraRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} listaCompra`;
  }

  findByUserId(id_usuario: number) {
    return this.listaCompraRepository.find({
      where: { id_usuario: id_usuario }
    });
  }

  update(id: number, updateListaCompraDto: UpdateListaCompraDto) {
    return this.listaCompraRepository.update(id, updateListaCompraDto);
  }

  remove(id: number) {
    return `This action removes a #${id} listaCompra`;
  }
}
