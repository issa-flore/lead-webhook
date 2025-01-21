/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  LeadStatusqueryresponse,
  LeadStatuscreaterequest,
  LeadStatusfile,
  LeadStatusupdaterequest
} from './schema';
/**
 * Representation of the 'LeadStatusApi'.
 * This API is part of the 'SalesSvcCloudV2_lead' service.
 */
export const LeadStatusApi = {
  _defaultBasePath: undefined,
  /**
   * Query all (active/inactive) lead status
   * @param queryParameters - Object containing the following keys: isActive, $orderby.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  queryleadserviceLeadStatus: (queryParameters?: {
    isActive?: boolean;
    $orderby?: string;
  }) =>
    new OpenApiRequestBuilder<LeadStatusqueryresponse>(
      'get',
      '/sap/c4c/api/v1/lead-service/statuses',
      {
        queryParameters
      },
      LeadStatusApi._defaultBasePath
    ),
  /**
   * Send lead status information to create a new lead status entity.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createleadserviceLeadStatus: (body: LeadStatuscreaterequest | undefined) =>
    new OpenApiRequestBuilder<LeadStatusfile>(
      'post',
      '/sap/c4c/api/v1/lead-service/statuses',
      {
        body
      },
      LeadStatusApi._defaultBasePath
    ),
  /**
   * Retrieve a specific lead status using the lead status code.
   * @param code - Lead Status Code
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readleadserviceLeadStatusCode: (code: string) =>
    new OpenApiRequestBuilder<LeadStatusfile>(
      'get',
      '/sap/c4c/api/v1/lead-service/statuses/{code}',
      {
        pathParameters: { code }
      },
      LeadStatusApi._defaultBasePath
    ),
  /**
   * Update a lead status using the lead status code.
   * @param code - Lead Status Code
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  putleadserviceLeadStatusCode: (
    code: string,
    body: LeadStatusupdaterequest | undefined
  ) =>
    new OpenApiRequestBuilder<LeadStatusfile>(
      'put',
      '/sap/c4c/api/v1/lead-service/statuses/{code}',
      {
        pathParameters: { code },
        body
      },
      LeadStatusApi._defaultBasePath
    ),
  /**
   * Delete a lead status using the lead status code.
   * @param code - Lead Status Code
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteleadserviceLeadStatusCode: (code: string) =>
    new OpenApiRequestBuilder<any>(
      'delete',
      '/sap/c4c/api/v1/lead-service/statuses/{code}',
      {
        pathParameters: { code }
      },
      LeadStatusApi._defaultBasePath
    )
};
