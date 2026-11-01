import { JSONStats, JSONValidationResult, IndentOption } from '../types';

export function parseErrorPosition(
  error: Error,
  text: string
): { line?: number; column?: number; snippet?: string } {
  const message = error.message;

  // 1. Check for explicit line and column in message (e.g., "(line 4 column 2)" or "line 4, column 2" or "at line 4 column 2")
  const lineColMatch = message.match(/(?:at\s+)?line\s+(\d+)\s*(?:,|and)?\s*col(?:umn)?\s+(\d+)/i);
  if (lineColMatch && lineColMatch[1] && lineColMatch[2]) {
    const line = parseInt(lineColMatch[1], 10);
    const col = parseInt(lineColMatch[2], 10);
    if (!isNaN(line) && !isNaN(col) && line >= 1) {
      const lines = text.split(/\r?\n/);
      if (line <= lines.length) {
        const targetLine = lines[line - 1] ?? '';
        const pointer = ' '.repeat(Math.max(0, col - 1)) + '^';
        const snippet = `${targetLine}\n${pointer}`;
        return { line, column: col, snippet };
      }
    }
  }

  // 2. Check for character position in message (e.g., "at position 16" or "position 16" or "char 16")
  let position: number | null = null;
  const posMatch = message.match(/position\s+(\d+)/i) || message.match(/char(?:acter)?\s+(\d+)/i);
  if (posMatch && posMatch[1]) {
    position = parseInt(posMatch[1], 10);
  }

  if (position !== null && !isNaN(position) && position >= 0) {
    // Calculate 1-based line and column from character position directly on raw input
    let line = 1;
    let col = 1;
    for (let i = 0; i < Math.min(position, text.length); i++) {
      if (text[i] === '\r') {
        if (text[i + 1] === '\n') {
          i++; // Skip LF in CRLF pair
        }
        line++;
        col = 1;
      } else if (text[i] === '\n') {
        line++;
        col = 1;
      } else {
        col++;
      }
    }

    const lines = text.split(/\r?\n/);
    const targetLine = lines[line - 1] ?? '';
    const pointer = ' '.repeat(Math.max(0, col - 1)) + '^';
    const snippet = `${targetLine}\n${pointer}`;

    return { line, column: col, snippet };
  }

  // If no position or line/column is reliably provided by the browser, return empty
  // (Never fabricate line or column numbers)
  return {};
}

export function computeStats(parsed: unknown, formattedString: string): JSONStats {
  const sizeBytes = new Blob([formattedString]).size;
  const linesCount = formattedString.split(/\r?\n/).length;
  
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
  if (!input.trim()) {
    return {
      isValid: false,
      error: 'Please enter or paste JSON to validate.'
    };
  }

  try {
    // Parse directly on raw input to preserve accurate character and line indices
    const parsed = JSON.parse(input);
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
  if (!input.trim()) {
    return {
      isValid: false,
      error: 'Please enter or paste JSON to format.'
    };
  }

  try {
    // Parse directly on raw input to preserve accurate character and line indices
    const parsed = JSON.parse(input);
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
    "Browser-based processing"
  ],
  "settings": {
    "indent": 2,
    "theme": "clean-light",
    "active": true
  },
  "metadata": {
    "author": "Browser Tools",
    "downloads": null
  }
}`;
