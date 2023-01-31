import { ApiProperty } from '@nestjs/swagger';
import { Ingrediente } from 'src/ingrediente/entities/ingrediente.entity';

export class CreateListaCompraDto {
  // @ApiProperty({ example: 1 })
  // id_ingrediente: number;

  // @ApiProperty({ example: 'harina' })
  // readonly nombre_ingrediente: string;

  @ApiProperty({ example: 1 })
  id_usuario: number;

  // @ApiProperty({ example: 100 })
  // cantidad_ingrediente: number;

  ingredientes: Array<{
    id_ingrediente: number;
    cantidad_ingrediente: number;
    nombre_ingrediente: string;
  }>;
}
