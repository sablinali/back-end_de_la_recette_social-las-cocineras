import { ApiProperty } from '@nestjs/swagger';
import { Ingrediente } from 'src/ingrediente/entities/ingrediente.entity';

export class RecetaDto {
  @ApiProperty({ example: 'pan' })
  readonly nombre_receta: string;
  
  @ApiProperty({ example: 'acompañamiento' })
  readonly tipo_receta: string;

  @ApiProperty({ example: 120 })
  readonly tiempo_cocina: number;

  @ApiProperty({ example: 'España' })
  readonly pais: string;

  @ApiProperty({ example: 'url' })
  readonly instrucciones: string;

  @ApiProperty({ example: 'harina' })
  readonly ingrediente: Ingrediente;
}
