import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadController } from './lead/lead.controller';
import { ConfigModule } from '@nestjs/config';
import { LeadService } from './lead/lead.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, LeadController],
  providers: [AppService, LeadService],
})
export class AppModule {}
