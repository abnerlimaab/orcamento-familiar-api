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
exports.DespesasController = void 0;
const common_1 = require("@nestjs/common");
const despesas_service_1 = require("./despesas.service");
const create_despesa_dto_1 = require("./dto/create-despesa.dto");
const update_despesa_dto_1 = require("./dto/update-despesa.dto");
let DespesasController = class DespesasController {
    constructor(despesasService) {
        this.despesasService = despesasService;
    }
    async create(createDespesaDto) {
        try {
            await this.despesasService.create(createDespesaDto);
        }
        catch (erro) {
            console.log(erro);
        }
    }
    async findAll() {
        try {
            return this.despesasService.findAll();
        }
        catch (erro) {
            console.log(erro);
        }
    }
    async findOne(id) {
        try {
            return await this.despesasService.findOne(+id);
        }
        catch (erro) {
            console.log(erro);
        }
    }
    async update(id, updateDespesaDto) {
        try {
            return await this.despesasService.update(+id, updateDespesaDto);
        }
        catch (erro) {
            console.log(erro);
        }
    }
    async remove(id) {
        try {
            return await this.despesasService.remove(+id);
        }
        catch (erro) {
            console.log(erro);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_despesa_dto_1.CreateDespesaDto]),
    __metadata("design:returntype", Promise)
], DespesasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DespesasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DespesasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_despesa_dto_1.UpdateDespesaDto]),
    __metadata("design:returntype", Promise)
], DespesasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DespesasController.prototype, "remove", null);
DespesasController = __decorate([
    (0, common_1.Controller)('despesas'),
    __metadata("design:paramtypes", [despesas_service_1.DespesasService])
], DespesasController);
exports.DespesasController = DespesasController;
//# sourceMappingURL=despesas.controller.js.map