import { Receta } from 'src/receta/entities/receta.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Ingrediente {
  @PrimaryGeneratedColumn()
  id_ingrediente: number;

  @Column()
  nombre_ingrediente: string;

  @Column()
  unidades_cantidad: string;

  @ManyToOne(() => Receta, (receta: Receta) => receta.ingredientes)
  @JoinColumn({ name: 'id_ingrediente' })
  receta: Receta;
}
