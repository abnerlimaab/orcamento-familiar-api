import { DespesasService } from './despesas.service';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
export declare class DespesasController {
    private readonly despesasService;
    constructor(despesasService: DespesasService);
    create(createDespesaDto: CreateDespesaDto): Promise<void>;
    findAll(): Promise<import("./despesa.model").Despesa[]>;
    findOne(id: string): Promise<import("./despesa.model").Despesa>;
    update(id: string, updateDespesaDto: UpdateDespesaDto): Promise<import("./despesa.model").Despesa>;
    remove(id: string): Promise<void>;
}
