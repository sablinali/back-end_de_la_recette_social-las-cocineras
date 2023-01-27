import { Receta } from 'src/receta/entities/receta.entity';
import { Column, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class Ingrediente {
  @PrimaryGeneratedColumn()
  id_ingrediente: number;

  @Column()
  nombre_ingrediente: string;

  @Column()
  unidades_cantidad: string;


//   @OneToMany(() => Receta, (receta: Receta) => receta.ingrediente)
//   @JoinTable()
//   receta: Receta[];
 }
