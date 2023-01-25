import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  nombre_usuario: string;

  @Column()
  contraseña_registro: string;

  @Column()
  id_registro: number;

  @Column()
  insignias: number;

}
