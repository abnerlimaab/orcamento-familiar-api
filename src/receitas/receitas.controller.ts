import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';

@Controller('receitas')
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}

  @Post()
  async create(@Body() createReceitaDto: CreateReceitaDto) {
    try {
      await this.receitasService.create(createReceitaDto);
    }
    catch (erro) {
      console.log(erro);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.receitasService.findAll();
    }
    catch (erro) {
      console.log(erro);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.receitasService.findOne(+id);
    }
    catch (erro) {
      console.log(erro);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateReceitaDto: UpdateReceitaDto) {
    try {
      return await this.receitasService.update(+id, updateReceitaDto);
    }
    catch (erro) {
      console.log(erro);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return this.receitasService.remove(+id);
    }
    catch (erro) {
      console.log(erro);
    }
  }
}
