/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Leadcreaterequest' schema.
 */
export type Leadcreaterequest = {
  /**
   * Min Length: 1.
   */
  name: string | null;
  status?: string | null;
  reasonForStatus?: string | null;
  source?: string | null;
  qualification?: string | null;
  isEndOfPurpose?: boolean | null;
  account?: {
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Max Length: 10.
     */
    displayId?: string | null;
    /**
     * Max Length: 255.
     */
    formattedName?: string | null;
    /**
     * Max Length: 40.
     */
    firstLineName?: string | null;
    /**
     * Max Length: 40.
     */
    secondLineName?: string | null;
    /**
     * Max Length: 40.
     */
    thirdLineName?: string | null;
    /**
     * Max Length: 40.
     */
    fourthLineName?: string | null;
    address?: {
      /**
       * Max Length: 80.
       */
      streetName?: string | null;
      /**
       * Max Length: 10.
       */
      houseId?: string | null;
      /**
       * Max Length: 10.
       */
      postalCode?: string | null;
      /**
       * Max Length: 40.
       */
      cityName?: string | null;
      /**
       * Max Length: 3.
       */
      country?: string | null;
      /**
       * Max Length: 255.
       */
      countryDescription?: string | null;
      /**
       * Format: "email".
       * Max Length: 255.
       */
      email?: string | null;
      /**
       * Max Length: 1280.
       */
      web?: string | null;
      /**
       * Max Length: 40.
       */
      phoneFormattedNumber?: string | null;
      /**
       * Max Length: 40.
       */
      mobileFormattedNumber?: string | null;
      /**
       * Max Length: 40.
       */
      formattedPostalAddressDescription?: string | null;
    } & Record<string, any>;
  } & Record<string, any>;
  businessArea?: {
    /**
     * Format: "uuid".
     */
    salesOrganisationId?: string | null;
    salesOrganisationDisplayId?: string | null;
    salesOrganisationName?: string | null;
    distributionChannel?: string | null;
    distributionChannelName?: string | null;
    division?: string | null;
    divisionName?: string | null;
    /**
     * Format: "uuid".
     */
    salesGroupId?: string | null;
    salesGroupDisplayId?: string | null;
    salesGroupName?: string | null;
    /**
     * Format: "uuid".
     */
    salesOfficeId?: string | null;
    salesOfficeDisplayId?: string | null;
    salesOfficeName?: string | null;
    /**
     * Format: "uuid".
     */
    salesTerritoryId?: string | null;
    salesTerritoryDisplayId?: string | null;
    salesTerritoryName?: string | null;
  } & Record<string, any>;
  salesUnit?: {
    /**
     * Format: "uuid".
     */
    id?: string | null;
    displayId?: string | null;
    formattedName?: string | null;
  } & Record<string, any>;
  owner?: {
    /**
     * Format: "uuid".
     */
    id?: string | null;
    displayId?: string | null;
    formattedName?: string | null;
  } & Record<string, any>;
  salesEmployees?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Format: "uuid".
     */
    salesEmployeeId?: string | null;
    displayId?: string | null;
    role?: string | null;
    formattedName?: string | null;
  } & Record<string, any>)[];
  contacts?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Format: "uuid".
     */
    contactId?: string | null;
    /**
     * Max Length: 10.
     */
    displayId?: string | null;
    isPrimary?: boolean | null;
    /**
     * Max Length: 255.
     */
    formattedName?: string | null;
    /**
     * Max Length: 40.
     */
    givenName?: string | null;
    /**
     * Max Length: 40.
     */
    familyName?: string | null;
    /**
     * Max Length: 1.
     */
    gender?: string | null;
    /**
     * Max Length: 255.
     */
    genderDescription?: string | null;
    address?: {
      /**
       * Format: "email".
       * Max Length: 255.
       */
      email?: string | null;
      /**
       * Max Length: 40.
       */
      phoneFormattedNumber?: string | null;
      /**
       * Max Length: 40.
       */
      mobileFormattedNumber?: string | null;
      /**
       * Max Length: 40.
       */
      departmentName?: string | null;
      /**
       * Max Length: 40.
       */
      functionalTitleName?: string | null;
      /**
       * Max Length: 10.
       */
      buildingId?: string | null;
      /**
       * Max Length: 10.
       */
      floorId?: string | null;
      /**
       * Max Length: 10.
       */
      roomId?: string | null;
      /**
       * Format: "double".
       */
      hugRank?: number | null;
    } & Record<string, any>;
  } & Record<string, any>)[];
  products?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Format: "uuid".
     */
    productId?: string | null;
    displayId?: string | null;
    productDescription?: string | null;
    quantity?: {
      /**
       * Format: "double".
       */
      content?: number | null;
      unitCode?: string | null;
      unitDescription?: string | null;
    } & Record<string, any>;
  } & Record<string, any>)[];
  notes?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Min Length: 1.
     */
    content: string | null;
    adminData?: {
      /**
       * Format: "uuid".
       */
      createdBy?: string | null;
      createdByName?: string | null;
      /**
       * Format: "date-time".
       */
      createdOn?: string | null;
      /**
       * Format: "uuid".
       */
      updatedBy?: string | null;
      updatedByName?: string | null;
      /**
       * Format: "date-time".
       */
      updatedOn?: string | null;
    } & Record<string, any>;
  } & Record<string, any>)[];
  relatedObjects?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Format: "uuid".
     */
    objectId?: string | null;
    displayId?: string | null;
    type?: string | null;
    typeDescription?: string | null;
    role?: 'PREDECESSOR' | 'SUCCESSOR' | null;
    roleDescription?: string | null;
    status?: 'OPEN' | 'INPROCESS' | 'COMPLETED' | 'CANCELLED' | null;
    /**
     * Format: "date-time".
     */
    startDateTime?: string | null;
    /**
     * Format: "date-time".
     */
    dueDateTime?: string | null;
    executionStatus?: string | null;
  } & Record<string, any>)[];
  worklistItems?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    playBookName?: string | null;
    /**
     * Format: "uuid".
     */
    playBookId?: string | null;
    /**
     * Format: "uuid".
     */
    playBookItemId?: string | null;
    type?:
      | 'ACTION'
      | 'APPOINTMENT'
      | 'TASK'
      | 'PHONE_CALL'
      | 'SURVEY'
      | 'EMAIL'
      | 'MASHUP'
      | 'SALES_QUOTE'
      | 'UNKNOWN'
      | null;
    title?: string | null;
    description?: string | null;
    priority?: string | null;
    priorityDescription?: string | null;
    category?: string | null;
    categoryDescription?: string | null;
    duration?: string | null;
    actionFields?: string[];
    /**
     * Format: "uuid".
     */
    relatedObjectId?: string | null;
    relatedObjectDisplayId?: string | null;
    isRelatedObjectCompleted?: boolean | null;
    isMandatory?: boolean | null;
    status?:
      | 'UNKNOWN'
      | 'PROPOSED'
      | 'PLANNED'
      | 'DISMISSED'
      | 'COMPLETED'
      | null;
    leadStatus?: string | null;
    isAutoExecute?: boolean | null;
    /**
     * Format: "date-time".
     */
    endDateTime?: string | null;
    /**
     * Format: "date-time".
     */
    startDateTime?: string | null;
    note?: {
      /**
       * Format: "uuid".
       */
      id?: string | null;
      /**
       * Min Length: 1.
       */
      content: string | null;
      adminData?: {
        /**
         * Format: "uuid".
         */
        createdBy?: string | null;
        createdByName?: string | null;
        /**
         * Format: "date-time".
         */
        createdOn?: string | null;
        /**
         * Format: "uuid".
         */
        updatedBy?: string | null;
        updatedByName?: string | null;
        /**
         * Format: "date-time".
         */
        updatedOn?: string | null;
      } & Record<string, any>;
    } & Record<string, any>;
  } & Record<string, any>)[];
  attachments?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    title?: string | null;
    type?: string | null;
    fileName?: string | null;
    fileSize?: string | null;
    contentType?: string | null;
    category?: string | null;
    status?: string | null;
    uploadUrl?: string | null;
    url?: string | null;
    adminData?: {
      /**
       * Format: "uuid".
       */
      createdBy?: string | null;
      createdByName?: string | null;
      /**
       * Format: "date-time".
       */
      createdOn?: string | null;
      /**
       * Format: "uuid".
       */
      updatedBy?: string | null;
      updatedByName?: string | null;
      /**
       * Format: "date-time".
       */
      updatedOn?: string | null;
    } & Record<string, any>;
  } & Record<string, any>)[];
} & Record<string, any>;
