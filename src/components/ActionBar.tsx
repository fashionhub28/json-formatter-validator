import React from 'react';
import { Sparkles, CheckCircle, Trash2, FileText, Settings2 } from 'lucide-react';
import { IndentOption } from '../types';

interface ActionBarProps {
  onFormat: () => void;
  onValidate: () => void;
  onClear: () => void;
  onLoadSample: () => void;
  indent: IndentOption;
  onIndentChange: (indent: IndentOption) => void;
  hasInput: boolean;
}

export const ActionBar: React.FC<ActionBarProps> = ({
  onFormat,
  onValidate,
  onClear,
  onLoadSample,
  indent,
  onIndentChange,
  hasInput,
}) => {
  return (
    <div
      id="action-bar-container"
      className="flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-xs"
    >
      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          id="btn-format-json"
          type="button"
          onClick={onFormat}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>Format JSON</span>
        </button>

        <button
          id="btn-validate-json"
          type="button"
          onClick={onValidate}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 cursor-pointer"
        >
          <CheckCircle className="w-4 h-4" />
          <span>Validate JSON</span>
        </button>

        <button
          id="btn-clear"
          type="button"
          onClick={onClear}
          disabled={!hasInput}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all border focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 ${
            hasInput
              ? 'bg-white hover:bg-rose-50 border-slate-200 hover:border-rose-200 text-slate-700 hover:text-rose-700 cursor-pointer shadow-xs'
              : 'bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed opacity-60'
          }`}
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear</span>
        </button>
      </div>

      {/* Secondary Controls & Indentation Options */}
      <div className="flex flex-wrap items-center gap-2 ml-auto">
        <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-lg border border-slate-200 text-xs">
          <span className="text-slate-500 font-medium px-2 flex items-center gap-1">
            <Settings2 className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Indent:</span>
          </span>

          {(['2', '4', 'tab', 'minified'] as IndentOption[]).map((opt) => (
            <button
              key={opt}
              id={`btn-indent-${opt}`}
              type="button"
              onClick={() => onIndentChange(opt)}
              className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                indent === opt
                  ? 'bg-white text-indigo-700 shadow-xs border border-slate-200/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              {opt === 'tab' ? 'Tab' : opt === 'minified' ? 'Minify' : `${opt} Spaces`}
            </button>
          ))}
        </div>

        <button
          id="btn-load-sample"
          type="button"
          onClick={onLoadSample}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5 text-slate-500" />
          <span>Sample</span>
        </button>
      </div>
    </div>
  );
};
