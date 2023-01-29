import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { Ingrediente } from './entities/ingrediente.entity';

@Injectable()
export class IngredienteService {
  constructor(
    @InjectRepository(Ingrediente) private ingredienteRepository: Repository<Ingrediente>,
  ) {}

  create(createIngredienteDto: CreateIngredienteDto) {
    return 'This action adds a new ingrediente';
  }

  createIngrediente(
    newIngrediente: CreateIngredienteDto
  ): Promise<Ingrediente> {
    return this.ingredienteRepository.save(newIngrediente);
  }

  async findAll(): Promise<Ingrediente[]> {
    return await this.ingredienteRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ingrediente`;
  }

  update(id: number, updateIngredienteDto: UpdateIngredienteDto) {
    return `This action updates a #${id} ingrediente`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingrediente`;
  }
}
