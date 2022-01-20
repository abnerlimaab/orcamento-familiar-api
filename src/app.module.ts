import { TransacoesService } from './Services/TransacoesService';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitasController } from './Controllers/ReceitasController';

@Module({
  imports: [],
  controllers: [AppController, ReceitasController],
  providers: [AppService, TransacoesService],
})
export class AppModule {}
