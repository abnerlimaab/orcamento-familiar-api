import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('receitas')
export class ReceitasController 
{
    @Get()
    listarReceitas() : string
    {
        return 'Listar receitas';
    }

    @Get(':id')
    detalharReceita(@Param() param) : string
    {
        return `Lista receita id: ${param.id}`;
    }

    @Post()
    cadastrarReceita(@Body() receita) : string
    {
        console.log(receita);
        return 'Receita criada';
    }

    @Put(':id')
    atualizarReceita(@Param() param, @Body() receita) : string
    {
        console.log(receita);
        return `Atualizado receita id: ${param.id}`;
    }

    @Delete(':id')
    excluirReceita(@Param() param) : string
    {
        return `Excluído receita id: ${param.id}`;
    }

}