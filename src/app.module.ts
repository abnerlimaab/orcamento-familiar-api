import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DespesasModule } from './despesas/despesas.module';
import { ReceitasModule } from './receitas/receitas.module';

@Module({
  imports: [DespesasModule, ReceitasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
