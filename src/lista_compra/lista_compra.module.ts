import { Module } from '@nestjs/common';
import { ListaCompraService } from './lista_compra.service';
import { ListaCompraController } from './lista_compra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListaCompra } from './entities/lista_compra.entity';
import { AuthModule } from 'utilities/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([ListaCompra]), AuthModule],
  controllers: [ListaCompraController],
  providers: [ListaCompraService]
})
export class ListaCompraModule {}
