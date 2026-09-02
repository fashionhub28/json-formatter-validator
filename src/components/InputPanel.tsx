import React, { useRef } from 'react';
import { FileInput, Clipboard, XCircle } from 'lucide-react';

interface InputPanelProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onPasteClipboard: () => void;
}

export const InputPanel: React.FC<InputPanelProps> = ({
  value,
  onChange,
  onClear,
  onKeyDown,
  onPasteClipboard,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const lineCount = value ? value.split('\n').length : 0;
  const charCount = value.length;
  const byteSize = new Blob([value]).size;

  const handleTabKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;

      // Insert 2 spaces
      const newValue = value.substring(0, start) + '  ' + value.substring(end);
      onChange(newValue);

      // Reset cursor position
      setTimeout(() => {
        if (target) {
          target.selectionStart = target.selectionEnd = start + 2;
        }
      }, 0);
      return;
    }

    onKeyDown(e);
  };

  return (
    <div
      id="input-panel"
      className="flex flex-col h-full rounded-xl bg-white border border-slate-200 shadow-xs overflow-hidden"
    >
      {/* Panel Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-50/80 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <FileInput className="w-4 h-4 text-indigo-600" />
          <span className="font-semibold text-slate-800 text-sm">Input JSON</span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          {value && (
            <div className="hidden sm:flex items-center gap-2 text-slate-500 font-mono">
              <span>{lineCount} {lineCount === 1 ? 'line' : 'lines'}</span>
              <span>•</span>
              <span>{charCount.toLocaleString()} chars</span>
              <span>•</span>
              <span>{(byteSize / 1024).toFixed(1)} KB</span>
            </div>
          )}

          <button
            type="button"
            onClick={onPasteClipboard}
            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium transition-colors cursor-pointer"
            title="Paste from clipboard"
          >
            <Clipboard className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Paste</span>
          </button>

          {value && (
            <button
              type="button"
              onClick={onClear}
              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-200 text-slate-600 hover:text-rose-600 text-xs font-medium transition-colors cursor-pointer"
              title="Clear input"
            >
              <XCircle className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Clear</span>
            </button>
          )}
        </div>
      </div>

      {/* Textarea Container */}
      <div className="relative flex-1 min-h-[340px] sm:min-h-[440px] bg-slate-900 flex flex-col">
        <textarea
          id="json-input-textarea"
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleTabKey}
          placeholder={`// Paste or write raw JSON here...\n{\n  "example": "paste your JSON here"\n}`}
          spellCheck={false}
          className="w-full flex-1 p-4 bg-slate-950 text-slate-100 font-mono text-sm leading-relaxed resize-none focus:outline-none focus:ring-0 placeholder:text-slate-600 selection:bg-indigo-500 selection:text-white"
        />

        {/* Bottom Helper Bar */}
        <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[10px]">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[10px]">Enter</kbd> to format</span>
          <span>Tab key supported</span>
        </div>
      </div>
    </div>
  );
};
