import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Receta {
  @PrimaryGeneratedColumn()
  id_receta: number;

  @Column()
  nombre: string;

  @Column()
  tipo: string;

  @Column()
  valoracion: number;

  @Column()
  tiempo_cocina_min: number;

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
}
