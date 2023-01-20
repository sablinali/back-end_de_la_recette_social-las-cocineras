import { Injectable } from '@nestjs/common';

@Injectable()
export class RecetaService {
  findAll(): any {
    return 'findAll working';
  }

  findReceta(recetaId: number){
    return `findReceta working with recetaId: ${recetaId}`
  }

  createReceta(newReceta: any){
    return newReceta;
  }
}
