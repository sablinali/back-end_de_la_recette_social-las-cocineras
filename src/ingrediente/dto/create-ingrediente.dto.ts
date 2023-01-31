import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredienteDto {
  @ApiProperty({ example: 'harina' })
  readonly nombre_ingrediente: string;

  @ApiProperty({ example: 100 })
  readonly unidades_cantidad: string;
}
