/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'LeadQualificationqueryresponse' schema.
 */
export type LeadQualificationqueryresponse = {
  /**
   * Format: "int32".
   */
  count?: number;
  value?: ({
    code?: string | null;
    description?: string | null;
    isActive?: boolean | null;
    sequence?: number | null;
    color?:
      | 'PRIMARY'
      | 'AQUA'
      | 'TEAL'
      | 'GREEN'
      | 'YELLOW'
      | 'ORANGE'
      | 'RED'
      | 'PINK'
      | 'PURPLE'
      | 'VIOLET'
      | 'ULTRAMARINE'
      | 'BLUE'
      | null;
    descriptions?: ({
      content?: string | null;
      languageCode?: string | null;
    } & Record<string, any>)[];
  } & Record<string, any>)[];
} & Record<string, any>;
