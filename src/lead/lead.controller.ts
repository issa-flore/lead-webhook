import { Controller, Get, Post} from '@nestjs/common';
import { LeadService } from './lead.service';
import { Leadqueryresponse } from 'services/SalesSvcCloudV2_lead';

@Controller('lead')
export class LeadController {
    constructor(private readonly leadService: LeadService) {}

    @Get()
    getLeads(): Promise<Leadqueryresponse> {
      return this.leadService.getLeads();
    }

    @Post()
    createCopyOfLead(){
      
    }
};