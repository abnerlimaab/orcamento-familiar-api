import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
export declare class ReceitasService {
    create(createReceitaDto: CreateReceitaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateReceitaDto: UpdateReceitaDto): string;
    remove(id: number): string;
}
