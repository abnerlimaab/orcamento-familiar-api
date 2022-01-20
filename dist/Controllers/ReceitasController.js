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
const TransacoesService_1 = require("./../Services/TransacoesService");
const common_1 = require("@nestjs/common");
const Receita_1 = require("../Models/Receita");
let ReceitasController = class ReceitasController {
    constructor(transacoesService) {
        this.transacoesService = transacoesService;
    }
    listar() {
        return this.transacoesService.listar();
    }
    detalhar(param) {
        return this.transacoesService.detalhar(param.id);
    }
    cadastrar(receita) {
        return this.transacoesService.cadastrar(receita);
    }
    atualizar(param, receita) {
        return this.transacoesService.atualizar(param.id, receita);
    }
    excluir(param) {
        this.transacoesService.excluir(param.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ReceitasController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Receita_1.Receita)
], ReceitasController.prototype, "detalhar", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Receita_1.Receita]),
    __metadata("design:returntype", Receita_1.Receita)
], ReceitasController.prototype, "cadastrar", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Receita_1.Receita]),
    __metadata("design:returntype", Receita_1.Receita)
], ReceitasController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReceitasController.prototype, "excluir", null);
ReceitasController = __decorate([
    (0, common_1.Controller)('receitas'),
    __metadata("design:paramtypes", [TransacoesService_1.TransacoesService])
], ReceitasController);
exports.ReceitasController = ReceitasController;
//# sourceMappingURL=ReceitasController.js.map