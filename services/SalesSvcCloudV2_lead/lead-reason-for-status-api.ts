/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  LeadReasonforStatusqueryresponse,
  LeadReasonforStatuscreaterequest,
  LeadReasonforStatusfile,
  LeadReasonforStatusupdaterequest
} from './schema';
/**
 * Representation of the 'LeadReasonForStatusApi'.
 * This API is part of the 'SalesSvcCloudV2_lead' service.
 */
export const LeadReasonForStatusApi = {
  _defaultBasePath: undefined,
  /**
   * Query all (active/inactive) lead reasons for status
   * @param queryParameters - Object containing the following keys: isActive.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  queryleadserviceLeadReasonForStatus: (queryParameters?: {
    isActive?: boolean;
  }) =>
    new OpenApiRequestBuilder<LeadReasonforStatusqueryresponse>(
      'get',
      '/sap/c4c/api/v1/lead-service/reasonForStatus',
      {
        queryParameters
      },
      LeadReasonForStatusApi._defaultBasePath
    ),
  /**
   * Send lead reason for status information to create a new lead reason for status entity.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createleadserviceLeadReasonForStatus: (
    body: LeadReasonforStatuscreaterequest | undefined
  ) =>
    new OpenApiRequestBuilder<LeadReasonforStatusfile>(
      'post',
      '/sap/c4c/api/v1/lead-service/reasonForStatus',
      {
        body
      },
      LeadReasonForStatusApi._defaultBasePath
    ),
  /**
   * Retrieve a specific lead reason for status using the lead reason for status code.
   * @param code - Lead Reason for Status Code
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readleadserviceLeadReasonForStatusCode: (code: string) =>
    new OpenApiRequestBuilder<LeadReasonforStatusfile>(
      'get',
      '/sap/c4c/api/v1/lead-service/reasonForStatus/{code}',
      {
        pathParameters: { code }
      },
      LeadReasonForStatusApi._defaultBasePath
    ),
  /**
   * Update a lead reason for status using the lead reason for status code.
   * @param code - Lead Reason for Status Code
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  putleadserviceLeadReasonForStatusCode: (
    code: string,
    body: LeadReasonforStatusupdaterequest | undefined
  ) =>
    new OpenApiRequestBuilder<LeadReasonforStatusfile>(
      'put',
      '/sap/c4c/api/v1/lead-service/reasonForStatus/{code}',
      {
        pathParameters: { code },
        body
      },
      LeadReasonForStatusApi._defaultBasePath
    ),
  /**
   * Delete a lead reason for status using the lead reason for status code.
   * @param code - Lead Reason for Status Code
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteleadserviceLeadReasonForStatusCode: (code: string) =>
    new OpenApiRequestBuilder<any>(
      'delete',
      '/sap/c4c/api/v1/lead-service/reasonForStatus/{code}',
      {
        pathParameters: { code }
      },
      LeadReasonForStatusApi._defaultBasePath
    )
};
