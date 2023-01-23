import { Injectable } from '@nestjs/common';
import { RecetaDto } from './dtos/receta.dto';
import { Receta } from './receta.class';

@Injectable()
export class RecetaService {
  receta: Receta[]=[
    {
    id_receta: 1;
    nombre: 'receta1';
    tipo: 'acompañante';
    valoracion: 5;
    tiempo_cocina_min: 40;
    num_visitas: 12;
    num_veces_compartido: 155;
    pais: 'España';
    comentarios: 'muy bueno';
    },
    {
    id_receta: 2;
    nombre: 'receta2';
    tipo: 'postre';
    valoracion: 6;
    tiempo_cocina_min: 25;
    num_visitas: 15;
    num_veces_compartido: 23;
    pais: 'Perú';
    comentarios: 'buenísimo';
    },
    ]


  findAll(params): Receta[] {
    return this.receta;
  }

  findReceta(recetaId: number): Receta{
    return this.receta[(recetaId)-1]
  }

  createReceta(newReceta: RecetaDto): Receta{
    const receta = new Receta();

    receta.id_receta = 99; 
    receta.nombre: newReceta.nombre;
    receta.tipo: newReceta.tipo;
    receta.tiempo_cocina_min: newReceta.tiempo_cocina_min;
    receta.pais: newReceta.pais;

    return receta;
  }

  deleteReceta(recetaId: number): Receta{
    return this.receta[(recetaId) - 1]
  }

  updateReceta(recetaId: number, newReceta: RecetaDto): Receta {
    return this.receta[(recetaId)-1];
  }
}
