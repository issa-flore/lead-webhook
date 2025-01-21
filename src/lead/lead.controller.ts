import { Body, Controller, Get, HttpException, HttpStatus, Post} from '@nestjs/common';
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
    async createCopyOfLead(@Body() body){
        try {
            console.log("Incoming Lead id:");
            console.log(body.data?.currentImage?.id);
            await this.leadService.createCopyOfLead(body.data?.currentImage?.id);
            return { status: 'success' };
        } catch (error) {
            console.error(error);
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};