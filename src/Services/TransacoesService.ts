import { Injectable } from "@nestjs/common";
import { Receita } from "src/Models/Receita";

@Injectable()
export class TransacoesService
{
    receitas : Receita[] = [
        new Receita("primeiro", 10, new Date(2022, 0, 20)),
        new Receita("segundo", 20, new Date(2022, 0, 20)),
        new Receita("terceiro", 30, new Date(2022, 0, 20))
    ];
    
    listar() : Receita[]
    {
        return this.receitas;
    }

    detalhar(id: number) : Receita
    {
        return this.receitas[id - 1];
    }

    cadastrar(receita : Receita) : Receita
    {
        receita.id = this.receitas.length + 1;        
        this.receitas.push(new Receita(receita.descricao, receita.valor, receita.data));
        console.log(`Receita de id: ${receita.id} cadastrada`);
        return receita;
    }

    atualizar(id : number, receita : Receita) : Receita
    {
        console.log(receita);
        return receita;
    }

    excluir(id : number)
    {
        console.log(`Excluído receita id: ${id}`);
    }
}