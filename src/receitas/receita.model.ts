import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'Receitas'
})
export class Receita extends Model {
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
}