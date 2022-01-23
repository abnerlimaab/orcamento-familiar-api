import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { Receita } from './receita.model';

const Op = require('sequelize');

@Injectable()
export class ReceitasService {
  constructor(@InjectModel(Receita) private receitaModel : typeof Receita) {}

  async create(createReceitaDto: CreateReceitaDto) {
    if (await this.isDuplicated(createReceitaDto)) return;
    await this.receitaModel.create(createReceitaDto);
  }

  async findAll() {
    return await this.receitaModel.findAll(
      {
        attributes: ['descricao', 'valor', 'data']
      }
    );
  }

  async findOne(id: number) {
    return await this.receitaModel.findOne(
      {
        attributes: ['descricao', 'valor', 'data'],
        where: {
          id: id
        }
      }
    );
  }

  async update(id: number, updateReceitaDto: UpdateReceitaDto) {
    if (await !this.isDuplicated(updateReceitaDto)) {
      await this.receitaModel.update(updateReceitaDto	,
        {
          where: {
            id: id
          }
        }
      );
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.receitaModel.destroy(
      {
        where: {
          id: id
        }
      }
    );
  }

  async isDuplicated(receita : CreateReceitaDto | UpdateReceitaDto) : Promise<boolean> {
    const mes = new Date(receita.data).getMonth() + 1;
    const receitaEncontrada = await this.receitaModel.findOne(
      {
        where: {
          descricao: receita.descricao,
          [Op.and]: Op.where(Op.fn('MONTH', Op.col('data')), mes)
        }
      }
    );
    if (receitaEncontrada) {
      console.log('Tentativa de cadastro duplicado');
      return true;
    }
    return false;
  }
}
