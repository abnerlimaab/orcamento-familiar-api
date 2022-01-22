import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Despesa } from './despesas/despesa.model';
import { DespesasModule } from './despesas/despesas.module';
import { ReceitasModule } from './receitas/receitas.module';

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
      models: [Despesa],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
