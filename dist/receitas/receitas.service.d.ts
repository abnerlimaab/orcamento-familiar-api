import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { Receita } from './receita.model';
export declare class ReceitasService {
    private receitaModel;
    constructor(receitaModel: typeof Receita);
    create(createReceitaDto: CreateReceitaDto): Promise<void>;
    findAll(): Promise<Receita[]>;
    findOne(id: number): Promise<Receita>;
    update(id: number, updateReceitaDto: UpdateReceitaDto): Promise<Receita>;
    remove(id: number): Promise<void>;
    isDuplicated(receita: CreateReceitaDto | UpdateReceitaDto): Promise<boolean>;
}
