import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_usuario: number;


  //crear validadores de campos : email, nombre, etc....
  @Column()
  nombre_usuario: string;


//validador de contraseña requiered
  @Column()
  contraseña_registro: string;

  @Column()
  id_registro: number;

  @Column()
  insignias: number;

}
