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
    private listaCompraRepository: Repository<ListaCompra>
  ) {}

  createListaCompra(
    createListaCompraDto: CreateListaCompraDto,
    id_usuario: number
  ) {
    createListaCompraDto.id_usuario = id_usuario;

    // const result = this.listaCompraRepository.reduce((acc, curr) => {
    //   const id_ingrediente = createListaCompraDto.id_ingrediente;
    //   let cantidad_ingrediente = createListaCompraDto.cantidad_ingrediente;
      
    //   const exists = acc.find(
    //     (item) => item.id_ingrediente === curr.id_ingrediente
    //   );
    //   if (exists) {
    //     cantidad_ingrediente += curr.cantidad_ingrediente;
    //     return acc;
    //   }
    //   return [...acc, curr];
    // }, []);

    // console.log(result);
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
