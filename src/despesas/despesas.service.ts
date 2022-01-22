import { Injectable } from '@nestjs/common';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { Despesa } from './entities/despesa.entity';

@Injectable()
export class DespesasService {
  private readonly despesas: Despesa[] = [];

  create(createDespesaDto: CreateDespesaDto) {
    console.log("Nova despesa cadastrada");
    this.despesas.push(createDespesaDto);
  }

  findAll() : Despesa[] {
    console.log(`Retornado lista de despesas`);
    return this.despesas;
  }

  findOne(id: number) : Despesa {
    console.log(`Retornado despesa de id ${id}`);
    return this.despesas[id];
  }

  update(id: number, updateDespesaDto: UpdateDespesaDto) : Despesa {
    this.despesas[id] = updateDespesaDto;
    console.log(`Atualizado despesa de id ${id}`);
    return this.despesas[id];
  }

  remove(id: number) {
    this.despesas[id] = undefined;
    console.log(`Excluido despesa de id ${id}`);
  }
}
