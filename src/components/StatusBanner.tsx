import React from 'react';
import { CheckCircle2, AlertCircle, Info, MapPin } from 'lucide-react';
import { JSONValidationResult } from '../types';

interface StatusBannerProps {
  result: JSONValidationResult | null;
  hasRunAction: boolean;
  actionType: 'format' | 'validate' | null;
}

export const StatusBanner: React.FC<StatusBannerProps> = ({ result, hasRunAction, actionType }) => {
  if (!hasRunAction || !result) {
    return null;
  }

  if (result.isValid) {
    const stats = result.stats;
    const actionLabel = actionType === 'format' ? 'Formatted & Validated Successfully' : 'Valid JSON';

    return (
      <div
        id="status-success-banner"
        className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 transition-all duration-200"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="p-1 rounded-lg bg-emerald-100 text-emerald-700 mt-0.5 sm:mt-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-emerald-900 text-sm sm:text-base">
                  {actionLabel}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-200/70 text-emerald-800 uppercase tracking-wide">
                  Valid
                </span>
              </div>
              <p className="text-xs text-emerald-700 mt-0.5">
                The JSON syntax is completely well-formed and compliant with RFC 8259.
              </p>
            </div>
          </div>

          {stats && (
            <div className="flex items-center gap-3 text-xs text-emerald-800 bg-emerald-100/60 px-3 py-1.5 rounded-lg border border-emerald-200/50 self-start sm:self-auto">
              <div className="flex items-center gap-1">
                <span className="text-emerald-600 font-medium">Type:</span>
                <span className="font-semibold capitalize">{stats.type}</span>
              </div>
              {stats.itemCount !== undefined && (
                <div className="flex items-center gap-1 border-l border-emerald-200 pl-3">
                  <span className="text-emerald-600 font-medium">
                    {stats.type === 'array' ? 'Items:' : 'Keys:'}
                  </span>
                  <span className="font-semibold">{stats.itemCount}</span>
                </div>
              )}
              <div className="flex items-center gap-1 border-l border-emerald-200 pl-3">
                <span className="text-emerald-600 font-medium">Lines:</span>
                <span className="font-semibold">{stats.linesCount}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Invalid JSON Error state
  return (
    <div
      id="status-error-banner"
      className="rounded-xl border border-rose-200 bg-rose-50/90 p-4 transition-all duration-200"
    >
      <div className="flex items-start gap-3">
        <div className="p-1 rounded-lg bg-rose-100 text-rose-700 mt-0.5">
          <AlertCircle className="w-5 h-5 text-rose-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-rose-900 text-sm sm:text-base">
              Invalid JSON Syntax
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-rose-200/80 text-rose-800 uppercase tracking-wide">
              Error
            </span>
            {(result.errorLine !== undefined || result.errorColumn !== undefined) && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-rose-100 text-rose-700 border border-rose-200">
                <MapPin className="w-3 h-3" />
                Line {result.errorLine ?? '?'}, Col {result.errorColumn ?? '?'}
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-rose-800 mt-1 font-mono break-words bg-rose-100/50 p-2 rounded border border-rose-200/50">
            {result.error || 'Failed to parse JSON string.'}
          </p>

          {result.errorSnippet && (
            <div className="mt-2.5">
              <p className="text-xs font-medium text-rose-900 mb-1">Error Location in input:</p>
              <pre className="text-xs font-mono bg-rose-950 text-rose-200 p-2.5 rounded-lg overflow-x-auto whitespace-pre leading-snug border border-rose-800">
                {result.errorSnippet}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
