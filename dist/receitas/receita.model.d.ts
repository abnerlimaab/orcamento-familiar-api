import { Model } from "sequelize-typescript";
export declare class Receita extends Model {
    id: number;
    descricao: string;
    valor: number;
    data: Date;
}
