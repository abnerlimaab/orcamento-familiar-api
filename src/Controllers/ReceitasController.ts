import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Receita } from "src/Models/Receita";

@Controller('receitas')
export class ReceitasController 
{
    receitas : Receita[] = [
        new Receita("primeiro", 10, new Date(2022, 0, 20)),
        new Receita("segundo", 20, new Date(2022, 0, 20)),
        new Receita("terceiro", 30, new Date(2022, 0, 20))
    ];

    @Get()
    listarReceitas() : Receita[]
    {
        return this.receitas;
    }

    @Get(':id')
    detalharReceita(@Param() param) : Receita
    {
        return this.receitas[param.id - 1];
    }

    @Post()
    cadastrarReceita(@Body() receita : Receita) : Receita
    {
        receita.id = this.receitas.length + 1;        
        this.receitas.push(new Receita(receita.descricao, receita.valor, receita.data));
        console.log(`Receita de id: ${receita.id} cadastrada`);
        return receita;
    }

    @Put(':id')
    atualizarReceita(@Param() param, @Body() receita : Receita) : Receita
    {
        console.log(receita);
        return receita;
    }

    @Delete(':id')
    excluirReceita(@Param() param) : string
    {
        return `Excluído receita id: ${param.id}`;
    }

}