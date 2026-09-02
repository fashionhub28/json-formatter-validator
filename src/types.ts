export interface JSONStats {
  sizeBytes: number;
  linesCount: number;
  type: 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null' | 'unknown';
  itemCount?: number;
}

export interface JSONValidationResult {
  isValid: boolean;
  formatted?: string;
  parsedData?: unknown;
  error?: string;
  errorLine?: number;
  errorColumn?: number;
  errorSnippet?: string;
  stats?: JSONStats;
}

export type IndentOption = '2' | '4' | 'tab' | 'minified';
