/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'LeadSourcecreaterequest' schema.
 */
export type LeadSourcecreaterequest = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  sequence?: number | null;
  descriptions?: ({
    content?: string | null;
    languageCode?: string | null;
  } & Record<string, any>)[];
} & Record<string, any>;
