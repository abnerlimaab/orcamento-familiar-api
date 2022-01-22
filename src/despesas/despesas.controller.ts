import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DespesasService } from './despesas.service';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';

@Controller('despesas')
export class DespesasController {
  constructor(private readonly despesasService: DespesasService) {}

  @Post()
  async create(@Body() createDespesaDto: CreateDespesaDto) {
    try {
      await this.despesasService.create(createDespesaDto);
    }
    catch (erro) {
      console.log(erro);
    }
  }

  @Get()
  async findAll() {
    return this.despesasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.despesasService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDespesaDto: UpdateDespesaDto) {
    return this.despesasService.update(+id, updateDespesaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.despesasService.remove(+id);
  }
}
