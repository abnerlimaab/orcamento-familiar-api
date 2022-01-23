import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { ReceitasController } from './receitas.controller';
import { Receita } from './receita.model';

@Module({
  imports: [SequelizeModule.forFeature([Receita])],
  controllers: [ReceitasController],
  providers: [ReceitasService]
})
export class ReceitasModule {}
