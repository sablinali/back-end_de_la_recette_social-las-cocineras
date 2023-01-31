import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Receta } from './entities/receta.entity';
import { RecetaService } from './receta.service';

// describe('RecetaService', () => {
//   let service: RecetaService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [RecetaService],
//     }).compile();

//     service = module.get<RecetaService>(RecetaService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
//   it('findAll should return "findAll working"', () => {
//     expect(service.findAll()).toBe('findAll working');
//   });
//   it('findReceta should return "findReceta working with recetaId: 5"', () => {
//     expect(service.findReceta(5)).toBe('findReceta working with recetaId: 5');
//   });
//   it('createReceta (newReceta) should return newReceta', () => {
//     const newReceta = {
//       info: 'info',
//     };
//     expect(service.createReceta(newReceta)).toBe(newReceta);
//   });
//   it('deleteReceta(5) shoould return "deleted with recetaId: 5"', () => {
//     expect(service.deleteReceta(5)).toContain("5")
//   });
//   it('updateReceta(5, {title:"myReceta"}) should return the Receta title', () => {
//     const recetaUpdated = {title: "myReceta"}
//     expect(service.updateReceta(5, recetaUpdated)).toContain('myReceta');
//   });
  
// });


const data:Receta[] =  [ {
  "id_receta": 1,
  "nombre_receta": "pastel",
  "tipo_receta": "postre",
  "valoracion": 5,
  "tiempo_cocina": 60,
  "num_visitas": 2,
  "num_veces_compartido": 0,
  "pais": "uk",
  "comentarios": null,
  "instrucciones": "url"
},
{
  "id_receta": 1,
  "nombre_receta": "pastel",
  "tipo_receta": "postre",
  "valoracion": 5,
  "tiempo_cocina": 60,
  "num_visitas": 2,
  "num_veces_compartido": 0,
  "pais": "uk",
  "comentarios": null,
  "instrucciones": "url"
},
];
describe('RecetaService', () => {
  let service: RecetaService;
  const mockRecetaRepository = {
    find: jest.fn().mockResolvedValue({data}),
  }
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecetaService],
      {
        provide: getRepositoryToken(Receta),
        useValue: (mockRecetaRepository)
      }
    }).compile();
    it('findAll should return the a list of recipes', async () => {
      expect(await service.findAll()).toMatchObject({data});
    });
  }});

