import { Test, TestingModule } from '@nestjs/testing';
import { ListaCompraController } from './lista_compra.controller';
import { ListaCompraService } from './lista_compra.service';

describe('ListaCompraController', () => {
  let controller: ListaCompraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListaCompraController],
      providers: [ListaCompraService],
    }).compile();

    controller = module.get<ListaCompraController>(ListaCompraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
