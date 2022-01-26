import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Despesa extends Model {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    descricao: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    valor: number;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false
    })
    data: Date;

    constructor(despesa?: Partial<Despesa>) {
        super();
        this.id = despesa?.id;
        this.descricao = despesa?.descricao;
        this.valor = despesa?.valor;
        this.data = despesa?.data;
    }
}
