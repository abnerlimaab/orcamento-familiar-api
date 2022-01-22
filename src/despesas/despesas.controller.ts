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
    try {
      return this.despesasService.findAll();
    }
    catch (erro) {
      console.log(erro);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.despesasService.findOne(+id);
    }
    catch (erro) {
      console.log(erro);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDespesaDto: UpdateDespesaDto) {
    try {
      return await this.despesasService.update(+id, updateDespesaDto);
    }
    catch (erro) {
      console.log(erro);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.despesasService.remove(+id);
    }
    catch (erro) {
      console.log(erro);
    }
  }
}
