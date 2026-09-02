import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { ActionBar } from './components/ActionBar';
import { StatusBanner } from './components/StatusBanner';
import { InputPanel } from './components/InputPanel';
import { OutputPanel } from './components/OutputPanel';
import { formatJSON, validateJSON, SAMPLE_JSON } from './utils/jsonUtils';
import { IndentOption, JSONValidationResult } from './types';

export default function App() {
  const [inputJson, setInputJson] = useState<string>('');
  const [indent, setIndent] = useState<IndentOption>('2');
  const [validationResult, setValidationResult] = useState<JSONValidationResult | null>(null);
  const [hasRunAction, setHasRunAction] = useState<boolean>(false);
  const [actionType, setActionType] = useState<'format' | 'validate' | null>(null);

  const handleFormat = useCallback(() => {
    setHasRunAction(true);
    setActionType('format');
    const result = formatJSON(inputJson, indent);
    setValidationResult(result);
  }, [inputJson, indent]);

  const handleValidate = useCallback(() => {
    setHasRunAction(true);
    setActionType('validate');
    const result = validateJSON(inputJson);
    setValidationResult(result);
  }, [inputJson]);

  const handleClear = () => {
    setInputJson('');
    setValidationResult(null);
    setHasRunAction(false);
    setActionType(null);
  };

  const handleLoadSample = () => {
    setInputJson(SAMPLE_JSON);
    setHasRunAction(true);
    setActionType('format');
    const result = formatJSON(SAMPLE_JSON, indent);
    setValidationResult(result);
  };

  const handleIndentChange = (newIndent: IndentOption) => {
    setIndent(newIndent);
    if (inputJson.trim() && validationResult?.isValid) {
      const result = formatJSON(inputJson, newIndent);
      setValidationResult(result);
    }
  };

  const handlePasteClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setInputJson(text);
        setHasRunAction(false);
        setValidationResult(null);
      }
    } catch {
      // If clipboard read is disallowed by browser, focus input
      const textarea = document.getElementById('json-input-textarea');
      if (textarea) textarea.focus();
    }
  };

  // Keyboard shortcut: Ctrl+Enter or Cmd+Enter to Format
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleFormat();
    }
  };

  // Load sample on first mount if empty
  useEffect(() => {
    if (!inputJson) {
      setInputJson(SAMPLE_JSON);
      const result = formatJSON(SAMPLE_JSON, '2');
      setValidationResult(result);
      setHasRunAction(true);
      setActionType('format');
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* App Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-5">
        {/* Controls and Action Bar */}
        <ActionBar
          onFormat={handleFormat}
          onValidate={handleValidate}
          onClear={handleClear}
          onLoadSample={handleLoadSample}
          indent={indent}
          onIndentChange={handleIndentChange}
          hasInput={Boolean(inputJson.trim())}
        />

        {/* Dynamic Status / Error Feedback Banner */}
        <StatusBanner
          result={validationResult}
          hasRunAction={hasRunAction}
          actionType={actionType}
        />

        {/* Dual Input/Output Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1 min-h-[480px]">
          <InputPanel
            value={inputJson}
            onChange={(val) => {
              setInputJson(val);
              // Reset prior validation status when user types fresh changes
              if (hasRunAction && !val.trim()) {
                setValidationResult(null);
                setHasRunAction(false);
              }
            }}
            onClear={handleClear}
            onKeyDown={handleKeyDown}
            onPasteClipboard={handlePasteClipboard}
          />

          <OutputPanel
            result={validationResult}
            hasRunAction={hasRunAction}
          />
        </div>
      </main>

      {/* Clean, responsive footer with page links for users and search engines */}
      <footer id="site-footer" className="border-t border-slate-200 bg-white/80 py-5 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
            <span className="font-semibold text-slate-700">JSON Formatter &amp; Validator</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-slate-400">RFC 8259 Compliant &bull; 100% Client-Side</span>
          </div>

          <nav aria-label="Site Pages" className="flex items-center gap-3 text-xs font-medium text-slate-600">
            <a href="/" className="hover:text-indigo-600 transition-colors">Home</a>
            <span className="text-slate-300">|</span>
            <a href="/about.html" className="hover:text-indigo-600 transition-colors">About Us</a>
            <span className="text-slate-300">|</span>
            <a href="/privacy.html" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <span className="text-slate-300">|</span>
            <a href="/contact.html" className="hover:text-indigo-600 transition-colors">Contact Us</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
