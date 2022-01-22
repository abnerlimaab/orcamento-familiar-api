import { DespesasService } from './despesas.service';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
export declare class DespesasController {
    private readonly despesasService;
    constructor(despesasService: DespesasService);
    create(createDespesaDto: CreateDespesaDto): Promise<void>;
    findAll(): Promise<import("./entities/despesa.entity").Despesa[]>;
    findOne(id: string): Promise<import("./entities/despesa.entity").Despesa>;
    update(id: string, updateDespesaDto: UpdateDespesaDto): Promise<import("./entities/despesa.entity").Despesa>;
    remove(id: string): Promise<void>;
}
