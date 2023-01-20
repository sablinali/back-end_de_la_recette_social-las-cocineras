import { Test, TestingModule } from '@nestjs/testing';
import { RecetaService } from './receta.service';

describe('RecetaService', () => {
  let service: RecetaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecetaService],
    }).compile();

    service = module.get<RecetaService>(RecetaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('findAll should return "findAll working"', () => {
    expect(service.findAll()).toBe('findAll working');
  });
  it('findReceta should return "findReceta working with recetaId: 5"', () => {
    expect(service.findReceta(5)).toBe('findReceta working with recetaId: 5');
  });
  it('createReceta (newReceta) should return newReceta', () => {
    const newReceta = {
      info: 'info',
    };
    expect(service.createReceta(newReceta)).toBe(newReceta);
  });
});
