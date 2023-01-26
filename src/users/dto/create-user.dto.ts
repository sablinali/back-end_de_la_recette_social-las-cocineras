import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example:'1'})
    readonly id_usuario: number;

    @ApiProperty({example:"Maria pi"})
    readonly nombre_usuario:string;

    @ApiProperty({example:'1234'})
    readonly contraseña_registro:string;

      
    @ApiProperty({example:'1'})
        readonly id_registro: number;
      
    @ApiProperty({example:'2'})
    readonly insignias: number;
      
    

}
