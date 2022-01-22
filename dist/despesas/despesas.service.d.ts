import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { Despesa } from './entities/despesa.entity';
export declare class DespesasService {
    private readonly despesas;
    create(createDespesaDto: CreateDespesaDto): void;
    findAll(): Despesa[];
    findOne(id: number): Despesa;
    update(id: number, updateDespesaDto: UpdateDespesaDto): Despesa;
    remove(id: number): void;
}
