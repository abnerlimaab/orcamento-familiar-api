"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransacoesService = void 0;
const common_1 = require("@nestjs/common");
const Receita_1 = require("../Models/Receita");
let TransacoesService = class TransacoesService {
    constructor() {
        this.transacoes = [
            new Receita_1.Receita("primeiro", 10, new Date(2022, 0, 20)),
            new Receita_1.Receita("segundo", 20, new Date(2022, 0, 20)),
            new Receita_1.Receita("terceiro", 30, new Date(2022, 0, 20))
        ];
    }
    listar() {
        return this.transacoes;
    }
    detalhar(id) {
        return this.transacoes[id - 1];
    }
    cadastrar(transacao) {
        transacao.id = this.transacoes.length + 1;
        this.transacoes.push(new Receita_1.Receita(transacao.descricao, transacao.valor, transacao.data));
        console.log(`Receita de id: ${transacao.id} cadastrada`);
        return transacao;
    }
    atualizar(id, transacao) {
        console.log(transacao);
        return transacao;
    }
    excluir(id) {
        console.log(`Excluído receita id: ${id}`);
    }
};
TransacoesService = __decorate([
    (0, common_1.Injectable)()
], TransacoesService);
exports.TransacoesService = TransacoesService;
//# sourceMappingURL=TransacoesService.js.map