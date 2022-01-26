import { Test, TestingModule } from '@nestjs/testing';
import { DespesasController } from './despesas.controller';
import { DespesasService } from './despesas.service';
import { SequelizeModule, getModelToken } from '@nestjs/sequelize';
import { Despesa } from './entities/despesa.entity';

describe('DespesasController', () => {
  let despesasController: DespesasController;
  let despesasService: DespesasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SequelizeModule],
      controllers: [DespesasController],
      providers: [DespesasService, {
        provide: getModelToken(Despesa),
        useValue: {
          create: jest.fn(),
          findAll: jest.fn(),
          findOne: jest.fn(),
          update: jest.fn(),
          remove: jest.fn(),
        }
      }],
    }).compile();

    despesasController = module.get<DespesasController>(DespesasController);
    despesasService = module.get<DespesasService>(DespesasService);
  });

  it('should be defined', () => {
    expect(despesasController).toBeDefined();
    expect(despesasService).toBeDefined();
  });
});
