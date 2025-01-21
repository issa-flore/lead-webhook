import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadController } from './lead/lead.controller';

@Module({
  imports: [],
  controllers: [AppController, LeadController],
  providers: [AppService],
})
export class AppModule {}
