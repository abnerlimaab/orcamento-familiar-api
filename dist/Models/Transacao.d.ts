export declare abstract class Transacao {
    id: number;
    descricao: string;
    valor: number;
    data: Date;
    constructor(descricao: string, valor: number, data: Date);
}
