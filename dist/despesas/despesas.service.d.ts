import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
export declare class DespesasService {
    private readonly despesas;
    create(createDespesaDto: CreateDespesaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDespesaDto: UpdateDespesaDto): string;
    remove(id: number): string;
}
