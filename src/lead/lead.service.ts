import { HttpException, Injectable } from '@nestjs/common';
import {
    LeadApi,
    Leadqueryresponse,
    Leadfile
} from '../../services/SalesSvcCloudV2_lead';

@Injectable()
export class LeadService {

    async getLeads(): Promise<Leadqueryresponse> {
        return await LeadApi.queryleadserviceLead().execute({
            destinationName: process.env.DESTINATION_NAME || ''
        }).catch(error => {
            throw new HttpException(`Failed to get leads - ${error.message}`, 500);
        });
    }
}
