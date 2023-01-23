export class RecetaDto {
  readonly nombre: string;
  readonly tipo: string;
  readonly tiempo_cocina_min: number;
  readonly pais: string;
  //faltaría añadir un campo en la BD con las instrucciones
  //instrucciones: string;
}
