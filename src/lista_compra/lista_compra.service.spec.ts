import { Test, TestingModule } from '@nestjs/testing';
import { ListaCompraService } from './lista_compra.service';

describe('ListaCompraService', () => {
  let service: ListaCompraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListaCompraService],
    }).compile();

    service = module.get<ListaCompraService>(ListaCompraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
