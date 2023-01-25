import { Module } from "@nestjs/common";
import { Receta } from "./entities/receta.entity";
import { RecetaController } from "./receta.controller";
import { RecetaService } from "./receta.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from "utilities/auth.module";


@Module({
    imports: [TypeOrmModule.forFeature([Receta])
        ,AuthModule],   
    providers: [RecetaService], 
    controllers: [RecetaController], 
  })
  export class RecetaModule {}