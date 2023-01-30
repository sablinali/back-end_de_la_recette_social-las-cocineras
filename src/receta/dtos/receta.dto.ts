import { Ingrediente } from 'src/ingrediente/entities/ingrediente.entity';

export class RecetaDto {
  readonly nombre_receta: string;
  readonly tipo_receta: string;
  readonly tiempo_cocina: number;
  readonly pais: string;
  readonly instrucciones: string;

  readonly ingrediente: Ingrediente;
}
