import { DespesasService } from './despesas.service';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
export declare class DespesasController {
    private readonly despesasService;
    constructor(despesasService: DespesasService);
    create(createDespesaDto: CreateDespesaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDespesaDto: UpdateDespesaDto): string;
    remove(id: string): string;
}
