/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  Leadqueryresponse,
  Leadcreaterequest,
  Leadfile,
  Leadupdaterequest,
  Leadpatchupdaterequest
} from './schema';
/**
 * Representation of the 'LeadApi'.
 * This API is part of the 'SalesSvcCloudV2_lead' service.
 */
export const LeadApi = {
  _defaultBasePath: undefined,
  /**
   * Specify query parameters to return desired lead entities.
   * @param queryParameters - Object containing the following keys: $top, $skip, $search, $orderby, $filter, $select, $count, $query.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  queryleadserviceLead: (queryParameters?: {
    $top?: number;
    $skip?: number;
    $search?: string;
    $orderby?: string;
    $filter?: string;
    $select?: string;
    $count?: boolean;
    $query?: string;
  }) =>
    new OpenApiRequestBuilder<Leadqueryresponse>(
      'get',
      '/sap/c4c/api/v1/lead-service/leads',
      {
        queryParameters
      },
      LeadApi._defaultBasePath
    ),
  /**
   * Send lead information to create a new lead entity.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createleadserviceLead: (body: Leadcreaterequest | undefined) =>
    new OpenApiRequestBuilder<Leadfile>(
      'post',
      '/sap/c4c/api/v1/lead-service/leads',
      {
        body
      },
      LeadApi._defaultBasePath
    ),
  /**
   * Retrieve a specific lead using the lead ID.
   * @param id - Lead Id
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readleadserviceLead: (id: string) =>
    new OpenApiRequestBuilder<Leadfile>(
      'get',
      '/sap/c4c/api/v1/lead-service/leads/{id}',
      {
        pathParameters: { id }
      },
      LeadApi._defaultBasePath
    ),
  /**
   * Update a lead using the lead ID
   * @param id - Lead Id
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateleadserviceLead: (id: string, body: Leadupdaterequest | undefined) =>
    new OpenApiRequestBuilder<Leadfile>(
      'put',
      '/sap/c4c/api/v1/lead-service/leads/{id}',
      {
        pathParameters: { id },
        body
      },
      LeadApi._defaultBasePath
    ),
  /**
   * Update lead attributes using the lead ID.
   * @param id - Lead Id
   * @param body - Request body.
   * @param headerParameters - Object containing the following keys: If-Match.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  modifyleadserviceLead: (
    id: string,
    body: Leadpatchupdaterequest | undefined,
    headerParameters: { 'If-Match': string }
  ) =>
    new OpenApiRequestBuilder<Leadfile>(
      'patch',
      '/sap/c4c/api/v1/lead-service/leads/{id}',
      {
        pathParameters: { id },
        body,
        headerParameters
      },
      LeadApi._defaultBasePath
    ),
  /**
   * Delete a lead using the lead ID.
   * @param id - Lead Id
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteleadserviceLead: (id: string) =>
    new OpenApiRequestBuilder<any>(
      'delete',
      '/sap/c4c/api/v1/lead-service/leads/{id}',
      {
        pathParameters: { id }
      },
      LeadApi._defaultBasePath
    )
};
