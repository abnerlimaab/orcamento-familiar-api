import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
export declare class ReceitasController {
    private readonly receitasService;
    constructor(receitasService: ReceitasService);
    create(createReceitaDto: CreateReceitaDto): Promise<void>;
    findAll(): Promise<import("./receita.model").Receita[]>;
    findOne(id: string): Promise<import("./receita.model").Receita>;
    update(id: string, updateReceitaDto: UpdateReceitaDto): Promise<import("./receita.model").Receita>;
    remove(id: string): Promise<void>;
}
