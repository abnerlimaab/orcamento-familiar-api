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
exports.ReceitasService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const receita_model_1 = require("./receita.model");
const Op = require('sequelize');
let ReceitasService = class ReceitasService {
    constructor(receitaModel) {
        this.receitaModel = receitaModel;
    }
    async create(createReceitaDto) {
        if (await this.isDuplicated(createReceitaDto))
            return;
        await this.receitaModel.create(createReceitaDto);
    }
    async findAll() {
        return await this.receitaModel.findAll({
            attributes: ['descricao', 'valor', 'data']
        });
    }
    async findOne(id) {
        return await this.receitaModel.findOne({
            attributes: ['descricao', 'valor', 'data'],
            where: {
                id: id
            }
        });
    }
    async update(id, updateReceitaDto) {
        if (await this.isDuplicated(updateReceitaDto))
            return;
        await this.receitaModel.update(updateReceitaDto, {
            where: {
                id: id
            }
        });
        return this.findOne(id);
    }
    async remove(id) {
        await this.receitaModel.destroy({
            where: {
                id: id
            }
        });
    }
    async isDuplicated(receita) {
        const mes = new Date(receita.data).getUTCMonth() + 1;
        const receitaEncontrada = await this.receitaModel.findOne({
            where: {
                descricao: receita.descricao,
                [Op.and]: Op.where(Op.fn('MONTH', Op.col('data')), mes)
            }
        });
        if (receitaEncontrada) {
            console.log('Tentativa de cadastro duplicado');
            return true;
        }
        else {
            return false;
        }
    }
};
ReceitasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(receita_model_1.Receita)),
    __metadata("design:paramtypes", [Object])
], ReceitasService);
exports.ReceitasService = ReceitasService;
//# sourceMappingURL=receitas.service.js.map