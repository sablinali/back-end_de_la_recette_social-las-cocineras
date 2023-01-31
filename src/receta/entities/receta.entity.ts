import { Ingrediente } from 'src/ingrediente/entities/ingrediente.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  JoinColumn
} from 'typeorm';

@Entity()
export class Receta {
  @PrimaryGeneratedColumn()
  id_receta: number;

  @Column()
  nombre_receta: string;

  @Column()
  tipo_receta: string;

  @Column()
  valoracion: number;

  @Column()
  tiempo_cocina: number;

  @Column()
  num_visitas: number;

  @Column()
  num_veces_compartido: number;

  @Column()
  pais: string;

  @Column()
  comentarios: string;

  @Column('text')
  instrucciones: string;

  @OneToMany(
    () => Ingrediente,
    // { cascade: ['delete', 'update'] },
    (ingredientes: Ingrediente) => {
      console.log(ingredientes.receta);
    }
  )
  @JoinColumn({ name: 'id_ingrediente' })
  ingredientes: Ingrediente[];
}
