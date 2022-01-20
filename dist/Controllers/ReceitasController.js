"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceitasController = void 0;
const common_1 = require("@nestjs/common");
const Receita_1 = require("../Models/Receita");
let ReceitasController = class ReceitasController {
    constructor() {
        this.receitas = [
            new Receita_1.Receita("primeiro", 10, new Date(2022, 0, 20)),
            new Receita_1.Receita("segundo", 20, new Date(2022, 0, 20)),
            new Receita_1.Receita("terceiro", 30, new Date(2022, 0, 20))
        ];
    }
    listarReceitas() {
        return this.receitas;
    }
    detalharReceita(param) {
        return this.receitas[param.id - 1];
    }
    cadastrarReceita(receita) {
        receita.id = this.receitas.length + 1;
        this.receitas.push(new Receita_1.Receita(receita.descricao, receita.valor, receita.data));
        console.log(`Receita de id: ${receita.id} cadastrada`);
        return receita;
    }
    atualizarReceita(param, receita) {
        console.log(receita);
        return receita;
    }
    excluirReceita(param) {
        return `Excluído receita id: ${param.id}`;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ReceitasController.prototype, "listarReceitas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Receita_1.Receita)
], ReceitasController.prototype, "detalharReceita", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Receita_1.Receita]),
    __metadata("design:returntype", Receita_1.Receita)
], ReceitasController.prototype, "cadastrarReceita", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Receita_1.Receita]),
    __metadata("design:returntype", Receita_1.Receita)
], ReceitasController.prototype, "atualizarReceita", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ReceitasController.prototype, "excluirReceita", null);
ReceitasController = __decorate([
    (0, common_1.Controller)('receitas')
], ReceitasController);
exports.ReceitasController = ReceitasController;
//# sourceMappingURL=ReceitasController.js.map