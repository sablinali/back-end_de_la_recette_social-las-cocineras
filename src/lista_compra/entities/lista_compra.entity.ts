import { ApiProperty } from '@nestjs/swagger';
import { Receta } from 'src/receta/entities/receta.entity';
import { Column, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

export class ListaCompra {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id_lista_compra: number;

//   @ApiProperty()
//   @PrimaryGeneratedColumn()
//   id_usuario: number;

  @ApiProperty()
  @Column()
  nombre_ingrediente: string;

  @ApiProperty()
  @Column()
  cantidad_ingrediente: number;

  @ApiProperty()
  @Column()
  unidades_cantidad: number;

  @ApiProperty()
  @Column()
  id_usuario: number;

//   @ManyToMany(() => Receta, (receta: Receta) => receta.listaCompra)
//   receta: Receta[];
}
