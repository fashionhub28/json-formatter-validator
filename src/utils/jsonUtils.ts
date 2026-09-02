import { JSONStats, JSONValidationResult, IndentOption } from '../types';

export function parseErrorPosition(error: Error, text: string): { line?: number; column?: number; snippet?: string } {
  const message = error.message;
  let position: number | null = null;

  // Regex patterns for position detection across different JS engine error messages
  const posMatch = message.match(/position\s+(\d+)/i) || message.match(/char(?:acter)?\s+(\d+)/i);
  if (posMatch && posMatch[1]) {
    position = parseInt(posMatch[1], 10);
  }

  // Check for line and column in message (e.g., "line 4 column 2")
  const lineColMatch = message.match(/line\s+(\d+)\s+column\s+(\d+)/i);
  if (lineColMatch && lineColMatch[1] && lineColMatch[2]) {
    const line = parseInt(lineColMatch[1], 10);
    const col = parseInt(lineColMatch[2], 10);
    const lines = text.split('\n');
    const targetLine = lines[line - 1] || '';
    const pointer = ' '.repeat(Math.max(0, col - 1)) + '^';
    const snippet = `${targetLine}\n${pointer}`;
    return { line, column: col, snippet };
  }

  if (position !== null && !isNaN(position)) {
    // Calculate line and column from character position
    let line = 1;
    let col = 1;
    for (let i = 0; i < Math.min(position, text.length); i++) {
      if (text[i] === '\n') {
        line++;
        col = 1;
      } else {
        col++;
      }
    }

    const lines = text.split('\n');
    const targetLine = lines[line - 1] ?? '';
    const pointer = ' '.repeat(Math.max(0, col - 1)) + '^';
    const snippet = `${targetLine}\n${pointer}`;

    return { line, column: col, snippet };
  }

  return {};
}

export function computeStats(parsed: unknown, formattedString: string): JSONStats {
  const sizeBytes = new Blob([formattedString]).size;
  const linesCount = formattedString.split('\n').length;
  
  let type: JSONStats['type'] = 'unknown';
  let itemCount: number | undefined;

  if (parsed === null) {
    type = 'null';
  } else if (Array.isArray(parsed)) {
    type = 'array';
    itemCount = parsed.length;
  } else if (typeof parsed === 'object') {
    type = 'object';
    itemCount = Object.keys(parsed as object).length;
  } else if (typeof parsed === 'string') {
    type = 'string';
  } else if (typeof parsed === 'number') {
    type = 'number';
  } else if (typeof parsed === 'boolean') {
    type = 'boolean';
  }

  return {
    sizeBytes,
    linesCount,
    type,
    itemCount
  };
}

export function validateJSON(input: string): JSONValidationResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return {
      isValid: false,
      error: 'Please enter or paste JSON to validate.'
    };
  }

  try {
    const parsed = JSON.parse(trimmed);
    const standardFormatted = JSON.stringify(parsed, null, 2);
    const stats = computeStats(parsed, standardFormatted);
    return {
      isValid: true,
      parsedData: parsed,
      formatted: standardFormatted,
      stats
    };
  } catch (err: unknown) {
    const errorObj = err instanceof Error ? err : new Error(String(err));
    const { line, column, snippet } = parseErrorPosition(errorObj, input);
    return {
      isValid: false,
      error: errorObj.message || 'Invalid JSON syntax',
      errorLine: line,
      errorColumn: column,
      errorSnippet: snippet
    };
  }
}

export function formatJSON(input: string, indent: IndentOption = '2'): JSONValidationResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return {
      isValid: false,
      error: 'Please enter or paste JSON to format.'
    };
  }

  try {
    const parsed = JSON.parse(trimmed);
    let space: string | number = 2;
    if (indent === '4') space = 4;
    else if (indent === 'tab') space = '\t';
    else if (indent === 'minified') space = 0;

    const formatted = indent === 'minified' 
      ? JSON.stringify(parsed) 
      : JSON.stringify(parsed, null, space);

    const stats = computeStats(parsed, formatted);

    return {
      isValid: true,
      parsedData: parsed,
      formatted,
      stats
    };
  } catch (err: unknown) {
    const errorObj = err instanceof Error ? err : new Error(String(err));
    const { line, column, snippet } = parseErrorPosition(errorObj, input);
    return {
      isValid: false,
      error: errorObj.message || 'Invalid JSON syntax',
      errorLine: line,
      errorColumn: column,
      errorSnippet: snippet
    };
  }
}

export const SAMPLE_JSON = `{
  "name": "JSON Formatter & Validator",
  "version": "1.0.0",
  "features": [
    "Format JSON with custom indentation",
    "Instant syntax validation",
    "Detailed error location detection",
    "One-click clipboard copy",
    "100% browser-based & secure"
  ],
  "settings": {
    "indent": 2,
    "theme": "clean-light",
    "active": true
  },
  "metadata": {
    "author": "Browser Tools",
    "downloads": null,
    "rating": 5.0
  }
}`;
