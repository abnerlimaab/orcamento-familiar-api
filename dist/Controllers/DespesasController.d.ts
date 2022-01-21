import { Despesa } from './../Models/Despesa';
import { TransacoesService } from './../Services/TransacoesService';
export declare class DespesasController {
    private transacoesService;
    constructor(transacoesService: TransacoesService);
    listar(): Despesa[];
    detalhar(param: any): Despesa;
    cadastrar(despesa: Despesa): Despesa;
    atualizar(param: any, despesa: Despesa): Despesa;
    excluir(param: any): void;
}
