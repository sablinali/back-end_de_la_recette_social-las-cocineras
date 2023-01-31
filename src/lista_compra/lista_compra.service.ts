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

  async createListaCompra(
    createListaCompraDto: CreateListaCompraDto,
    id_usuario: number
  ) {
    console.log(createListaCompraDto.ingredientes, id_usuario);
    createListaCompraDto.id_usuario = id_usuario;

    createListaCompraDto.ingredientes.forEach(async (el) => {
      const result: any = await this.listaCompraRepository.findOne({
        where: {
          id_ingrediente: el.id_ingrediente,
          id_usuario: createListaCompraDto.id_usuario
        }
      });
      console.log(result);
      const listaCompra = {
        nombre_ingrediente: el.nombre_ingrediente,
        cantidad_ingrediente: el.cantidad_ingrediente,
        unidades_cantidad: null,
        id_usuario: createListaCompraDto.id_usuario,
        id_ingrediente: el.id_ingrediente
      };
      if (!result) {
        return this.listaCompraRepository.save(listaCompra);
      } else {
        result.cantidad_ingrediente += el.cantidad_ingrediente;
        return this.listaCompraRepository.save(result);
      }
    });
    return this.listaCompraRepository.find({ where: { id_usuario } });
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
