import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { Despesa } from './entities/despesa.entity';
export declare class DespesasService {
    private despesaModel;
    constructor(despesaModel: typeof Despesa);
    create(createDespesaDto: CreateDespesaDto): Promise<void>;
    findAll(): Promise<Despesa[]>;
    findOne(id: number): Promise<Despesa>;
    update(id: number, updateDespesaDto: UpdateDespesaDto): Promise<Despesa>;
    remove(id: number): Promise<void>;
    isDuplicated(despesa: CreateDespesaDto | UpdateDespesaDto): Promise<boolean>;
}
