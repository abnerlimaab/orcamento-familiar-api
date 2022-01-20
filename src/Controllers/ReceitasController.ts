import { TransacoesService } from './../Services/TransacoesService';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Receita } from "src/Models/Receita";

@Controller('receitas')
export class ReceitasController 
{
    constructor(private transacoesService: TransacoesService)
    {
    }

    @Get()
    listar() : Receita[]
    {
        return this.transacoesService.listar();
    }

    @Get(':id')
    detalhar(@Param() param) : Receita
    {
        return this.transacoesService.detalhar(param.id);
    }

    @Post()
    cadastrar(@Body() receita : Receita) : Receita
    {
        return this.transacoesService.cadastrar(receita);
    }

    @Put(':id')
    atualizar(@Param() param, @Body() receita : Receita) : Receita
    {
        return this.transacoesService.atualizar(param.id, receita);
    }

    @Delete(':id')
    excluir(@Param() param)
    {
        this.transacoesService.excluir(param.id);
    }

}