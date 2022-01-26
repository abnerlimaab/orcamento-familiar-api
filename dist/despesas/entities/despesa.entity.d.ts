import { Model } from "sequelize-typescript";
export declare class Despesa extends Model {
    id: number;
    descricao: string;
    valor: number;
    data: Date;
}
