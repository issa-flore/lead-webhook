/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'LeadQualificationupdaterequest' schema.
 */
export type LeadQualificationupdaterequest = {
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
} & Record<string, any>;
