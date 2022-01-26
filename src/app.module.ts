import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DespesasModule } from './despesas/despesas.module';
import { Receita } from './receitas/receita.model';
import { ReceitasModule } from './receitas/receitas.module';
import { Despesa } from './despesas/entities/despesa.entity';

@Module({
  imports: [
    DespesasModule, 
    ReceitasModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'orcamento_familiar',
      models: [Despesa, Receita],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
