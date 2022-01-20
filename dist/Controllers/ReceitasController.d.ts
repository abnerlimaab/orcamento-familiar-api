import { TransacoesService } from './../Services/TransacoesService';
import { Receita } from "src/Models/Receita";
export declare class ReceitasController {
    private transacoesService;
    constructor(transacoesService: TransacoesService);
    listar(): Receita[];
    detalhar(param: any): Receita;
    cadastrar(receita: Receita): Receita;
    atualizar(param: any, receita: Receita): Receita;
    excluir(param: any): void;
}
