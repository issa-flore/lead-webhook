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

    async createCopyOfLead(id): Promise<Leadfile> {
        // Read complete Lead from LeadApi
        const readLeadResponse = await LeadApi
            .readleadserviceLead(id)
            .execute({ destinationName: process.env.DESTINATION_NAME || '' })
            .catch(error => {
                throw new HttpException(`Failed to retrieve complete lead - ${error.message}`, 500);
            });
        const originalLead = readLeadResponse.value;
        console.log("Complete Lead to copy:");
        console.log(originalLead);

        // Determine fields for Lead Copy
        const copyLeadName = originalLead?.name + ' ' + process.env.LEAD_COPY_TEXT_ADDITION;

        // Create Lead Copy using LeadApi
        const createdCopyLead = await LeadApi.createleadserviceLead({
            name: copyLeadName,
            startFrom: originalLead?.dueUntil,
            account: originalLead?.account,
            businessArea: originalLead?.businessArea,
            contacts: originalLead?.contacts
        }).execute({ destinationName: process.env.DESTINATION_NAME || '' })
        .catch(error => {
            throw new HttpException(`Failed to create copy of lead - ${error.message}`, 500);
        });
        console.log("Created Copy Lead:");
        console.log(createdCopyLead);
        return createdCopyLead;
    }
}
