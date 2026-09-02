import React, { useState } from 'react';
import { FileOutput, Copy, Check, Download, WrapText, CheckCircle2, AlertTriangle } from 'lucide-react';
import { JSONValidationResult } from '../types';

interface OutputPanelProps {
  result: JSONValidationResult | null;
  hasRunAction: boolean;
}

export const OutputPanel: React.FC<OutputPanelProps> = ({ result, hasRunAction }) => {
  const [copied, setCopied] = useState(false);
  const [wrapLines, setWrapLines] = useState(true);

  const outputText = result?.formatted || '';
  const isInvalid = hasRunAction && result && !result.isValid;
  const isSuccess = hasRunAction && result && result.isValid;

  const handleCopy = async () => {
    if (!outputText) return;
    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = outputText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (!outputText) return;
    const blob = new Blob([outputText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const lineCount = outputText ? outputText.split('\n').length : 0;
  const byteSize = outputText ? new Blob([outputText]).size : 0;

  return (
    <div
      id="output-panel"
      className="flex flex-col h-full rounded-xl bg-white border border-slate-200 shadow-xs overflow-hidden"
    >
      {/* Panel Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-50/80 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <FileOutput className="w-4 h-4 text-emerald-600" />
          <span className="font-semibold text-slate-800 text-sm">Formatted Output</span>
          {isSuccess && (
            <span className="hidden xs:inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
              <CheckCircle2 className="w-3 h-3" /> Ready
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {outputText && (
            <>
              <button
                type="button"
                onClick={() => setWrapLines(!wrapLines)}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded border text-xs font-medium transition-colors cursor-pointer ${
                  wrapLines
                    ? 'bg-slate-200/80 border-slate-300 text-slate-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
                title="Toggle line wrapping"
              >
                <WrapText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Wrap</span>
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
                title="Download JSON file"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden sm:inline">Save</span>
              </button>
            </>
          )}

          <button
            id="btn-copy-output"
            type="button"
            onClick={handleCopy}
            disabled={!outputText}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 ${
              outputText
                ? copied
                  ? 'bg-emerald-600 text-white shadow-xs focus:ring-emerald-500 cursor-default'
                  : 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white shadow-xs focus:ring-indigo-500 cursor-pointer'
                : 'bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Output Content Area */}
      <div className="relative flex-1 min-h-[340px] sm:min-h-[440px] bg-slate-950 flex flex-col">
        {outputText ? (
          <pre
            id="json-formatted-output"
            tabIndex={0}
            className={`w-full flex-1 p-4 bg-slate-950 text-emerald-400 font-mono text-sm leading-relaxed overflow-auto selection:bg-emerald-600 selection:text-white focus:outline-none ${
              wrapLines ? 'whitespace-pre-wrap break-words' : 'whitespace-pre'
            }`}
          >
            <code>{outputText}</code>
          </pre>
        ) : isInvalid ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-400">
            <div className="w-12 h-12 rounded-full bg-rose-950/80 border border-rose-800/80 flex items-center justify-center text-rose-400 mb-3">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium text-slate-300">Validation Failed</p>
            <p className="text-xs text-slate-400 max-w-sm mt-1">
              Please resolve the syntax error shown in the alert banner above to view formatted JSON.
            </p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-500">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-600 mb-3">
              <FileOutput className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium text-slate-400">No output yet</p>
            <p className="text-xs text-slate-500 max-w-xs mt-1">
              Paste your raw JSON on the left and click <strong>Format JSON</strong> or <strong>Validate JSON</strong>.
            </p>
          </div>
        )}

        {/* Bottom Output Stats Bar */}
        {outputText && (
          <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>{lineCount} {lineCount === 1 ? 'line' : 'lines'}</span>
            <span>{byteSize.toLocaleString()} bytes ({(byteSize / 1024).toFixed(2)} KB)</span>
          </div>
        )}
      </div>
    </div>
  );
};
