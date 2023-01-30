import { ApiProperty } from '@nestjs/swagger';
import { Receta } from 'src/receta/entities/receta.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ListaCompra {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id_lista_compra: number;

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

  @ApiProperty()
  @Column()
  id_ingrediente: number;

//   @ManyToMany(() => Receta, (receta: Receta) => receta.listaCompra)
//   receta: Receta[];
}
