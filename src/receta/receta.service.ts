import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { RecetaDto } from './dtos/receta.dto';
import { Receta } from './entities/receta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecetaService {
  constructor(
    @InjectRepository(Receta) private recetaRepository: Repository<Receta>,
  ) {}

  async findAll(): Promise<Receta[]> {
    return await this.recetaRepository.find({ relations: ['ingredientes'] });
  }

  async findReceta(recetaId: number): Promise<Receta> {
    return await this.recetaRepository.findOne({
      where: { id_receta: recetaId },
    });
  }

  createReceta(newReceta: RecetaDto): Promise<Receta> {
    return this.recetaRepository.save(newReceta);
  }

  deleteReceta(recetaId: number) {
    return this.recetaRepository.delete({ id_receta: recetaId });
  }

  async updateReceta(recetaId: number, newReceta: RecetaDto): Promise<Receta> {
    const toUpdate = await this.recetaRepository.findOne({
      where: { id_receta: recetaId },
    });
    const updated = Object.assign(toUpdate, newReceta);

    return this.recetaRepository.save(updated);
  }
}
