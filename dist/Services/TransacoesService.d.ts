import { Transacao } from './../Models/Transacao';
export declare class TransacoesService {
    transacoes: Transacao[];
    listar(): Transacao[];
    detalhar(id: number): Transacao;
    cadastrar(transacao: Transacao): Transacao;
    atualizar(id: number, transacao: Transacao): Transacao;
    excluir(id: number): void;
}
