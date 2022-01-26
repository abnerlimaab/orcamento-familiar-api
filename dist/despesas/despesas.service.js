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
exports.DespesasService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const despesa_entity_1 = require("./entities/despesa.entity");
const Op = require('sequelize');
let DespesasService = class DespesasService {
    constructor(despesaModel) {
        this.despesaModel = despesaModel;
    }
    async create(createDespesaDto) {
        if (await this.isDuplicated(createDespesaDto))
            return;
        await this.despesaModel.create(createDespesaDto);
    }
    async findAll() {
        return await this.despesaModel.findAll({
            attributes: ['descricao', 'valor', 'data']
        });
    }
    async findOne(id) {
        return await this.despesaModel.findOne({
            attributes: ['descricao', 'valor', 'data'],
            where: {
                id: id
            }
        });
    }
    async update(id, updateDespesaDto) {
        if (this.isDuplicated(updateDespesaDto)) {
            await this.despesaModel.update(updateDespesaDto, {
                where: {
                    id: id
                }
            });
            return this.findOne(id);
        }
    }
    async remove(id) {
        await this.despesaModel.destroy({
            where: {
                id: id
            }
        });
    }
    async isDuplicated(despesa) {
        const mes = new Date(despesa.data).getUTCMonth() + 1;
        const despesaEncontrada = await this.despesaModel.findOne({
            where: {
                descricao: despesa.descricao,
                [Op.and]: Op.where(Op.fn('MONTH', Op.col('data')), mes)
            }
        });
        if (despesaEncontrada) {
            console.log("Tentativa de cadastro duplicado");
            return true;
        }
        else {
            return false;
        }
    }
};
DespesasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(despesa_entity_1.Despesa)),
    __metadata("design:paramtypes", [Object])
], DespesasService);
exports.DespesasService = DespesasService;
//# sourceMappingURL=despesas.service.js.map