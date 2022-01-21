import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
export declare class ReceitasController {
    private readonly receitasService;
    constructor(receitasService: ReceitasService);
    create(createReceitaDto: CreateReceitaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateReceitaDto: UpdateReceitaDto): string;
    remove(id: string): string;
}
