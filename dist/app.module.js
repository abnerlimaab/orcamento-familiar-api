"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const despesas_module_1 = require("./despesas/despesas.module");
const receita_model_1 = require("./receitas/receita.model");
const receitas_module_1 = require("./receitas/receitas.module");
const despesa_entity_1 = require("./despesas/entities/despesa.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            despesas_module_1.DespesasModule,
            receitas_module_1.ReceitasModule,
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'admin',
                database: 'orcamento_familiar',
                models: [despesa_entity_1.Despesa, receita_model_1.Receita],
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map