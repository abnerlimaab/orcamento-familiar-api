import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Despesa } from './despesa.model';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';

@Injectable()
export class DespesasService {
  constructor(
    @InjectModel(Despesa) private despesaModel: typeof Despesa
  ) {}

  async create(createDespesaDto: CreateDespesaDto) {
    await this.despesaModel.create(createDespesaDto);
  }

  async findAll() : Promise<Despesa[]> {
    return this.despesaModel.findAll();
  }

  async findOne(id: number) : Promise<Despesa> {
    return this.despesaModel.findOne({
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateDespesaDto: UpdateDespesaDto) : Promise<Despesa> {
    await this.despesaModel.update(updateDespesaDto, {
      where: {
        id: id
      }
    })
    return this.findOne(id);
  }

  async remove(id: number) {
    const despesa : Despesa = await this.findOne(id);
    despesa.destroy();
  }
}
