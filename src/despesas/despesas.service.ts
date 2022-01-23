import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Despesa } from './despesa.model';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';

const Op = require('sequelize');

@Injectable()
export class DespesasService {
  constructor(
    @InjectModel(Despesa) private despesaModel: typeof Despesa
  ) {}

  async create(createDespesaDto: CreateDespesaDto) {
    if (await this.isDuplicated(createDespesaDto)) return;
    await this.despesaModel.create(createDespesaDto);
  }

  async findAll() : Promise<Despesa[]> {
    return await this.despesaModel.findAll({
      attributes: ['descricao', 'valor', 'data']
    });
  }

  async findOne(id: number) : Promise<Despesa> {
    return await this.despesaModel.findOne({
      attributes: ['descricao', 'valor', 'data'],
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateDespesaDto: UpdateDespesaDto) : Promise<Despesa> {
    if (!this.isDuplicated(updateDespesaDto)) {
      await this.despesaModel.update(updateDespesaDto, {
        where: {
          id: id
        }
      })
      return this.findOne(id);
    }
  }

  async remove(id: number) {
    await this.despesaModel.destroy({
      where : {
        id: id
      }
    });
  }

  async isDuplicated(despesa : CreateDespesaDto | UpdateDespesaDto) : Promise<boolean> {
    const mes : number = new Date(despesa.data).getUTCMonth() + 1;
    const despesaEncontrada = await this.despesaModel.findOne(
      {
        where: 
        {
          descricao: despesa.descricao,
          [Op.and]: Op.where(Op.fn('MONTH', Op.col('data')), mes)
        }
      }
  );
    if (despesaEncontrada) {
      console.log("Tentativa de cadastro duplicado");
      return true;
    } else {
      return false;
    }    
  }
}