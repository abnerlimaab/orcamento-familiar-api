import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { DespesasService } from './despesas.service';
import { DespesasController } from './despesas.controller';
import { Despesa } from './entities/despesa.entity';

@Module({
  imports: [SequelizeModule.forFeature([Despesa])],
  controllers: [DespesasController],
  providers: [DespesasService]
})
export class DespesasModule {}
