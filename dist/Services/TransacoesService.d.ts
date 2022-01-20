import { Receita } from "src/Models/Receita";
export declare class TransacoesService {
    receitas: Receita[];
    listar(): Receita[];
    detalhar(id: number): Receita;
    cadastrar(receita: Receita): Receita;
    atualizar(id: number, receita: Receita): Receita;
    excluir(id: number): void;
}
