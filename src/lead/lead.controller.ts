import { Controller, Get, Post} from '@nestjs/common';

@Controller('lead')
export class LeadController {

    @Get()
    getLeads(){
      
    }

    @Post()
    createCopyOfLead(){
      
    }
}