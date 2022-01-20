import { Receita } from "src/Models/Receita";
export declare class ReceitasController {
    receitas: Receita[];
    listarReceitas(): Receita[];
    detalharReceita(param: any): Receita;
    cadastrarReceita(receita: Receita): Receita;
    atualizarReceita(param: any, receita: Receita): Receita;
    excluirReceita(param: any): string;
}
