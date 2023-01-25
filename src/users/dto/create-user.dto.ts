import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        example:"Maria pi"
    })
    readonly name:string;

}
