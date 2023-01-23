import { Test, TestingModule } from '@nestjs/testing';
import { RecetaController } from './receta.controller';
import { RecetaService } from './receta.service';

describe('RecetaController', () => {
  let controller: RecetaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecetaController],
      providers: [RecetaService],
    }).compile();

    controller = module.get<RecetaController>(RecetaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAll should return "findAll working"', () => {
    expect(controller.findAll()).toBe('findAll working');
  });

  it('findReceta should return "findReceta working with recetaId: 5"', () => {
    expect(controller.findReceta(5)).toBe(
      'findReceta working with recetaId: 5',);
  });

  it('createReceta(newReceta) should return newReceta', () => {
    const newReceta = {
      info: 'info'
    };
    expect(controller.createReceta(newReceta)).toBe(newReceta);
  });
 
  it('deleteReceta(5) should return "deleted with recetaId: 5', () => {
    expect(controller.deleteReceta(5)).toContain("5");
  });

  it('updateReceta({title:"myReceta"}, 5) should return the Receta title', () => {
    const recetaUpdated = {title: "myReceta"}; 
    expect(controller.updateReceta(recetaUpdated, 5)).toContain('myReceta');

});
});