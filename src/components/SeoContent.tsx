import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const SeoContent: React.FC = () => {
  return (
    <section
      id="informational-guide"
      aria-label="JSON Formatter and Validator Guide"
      className="mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-slate-200 text-slate-700"
    >
      <div className="space-y-8 sm:space-y-10">
        {/* Section 1: What is a JSON Formatter? */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            What is a JSON Formatter?
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            <p>
              A JSON formatter is a tool that converts compact or difficult-to-read JSON into a clean and structured format. Proper indentation makes JSON easier to read, understand, debug, and maintain.
            </p>
            <p>
              A JSON formatter is useful when working with API responses, configuration files, application data, and software development projects.
            </p>
          </div>
        </article>

        {/* Section 2: What is a JSON Validator? */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            What is a JSON Validator?
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            <p>
              A JSON validator checks whether JSON data follows the correct JSON syntax. It can help identify problems such as missing commas, incorrect quotation marks, unmatched brackets, and other syntax errors.
            </p>
            <p>
              Validating JSON before using it in an application or API can help prevent avoidable data and parsing errors.
            </p>
          </div>
        </article>

        {/* Section 3: How to Format JSON Online */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            How to Format JSON Online
          </h2>
          <ol className="list-decimal list-inside space-y-2.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl marker:font-semibold marker:text-indigo-600">
            <li>Paste your JSON into the input area.</li>
            <li>Click Format JSON.</li>
            <li>Review the formatted result.</li>
            <li>Copy the formatted JSON when you are ready to use it.</li>
          </ol>
        </article>

        {/* Section 4: How to Validate JSON */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            How to Validate JSON
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            <p>
              Paste your JSON into the editor and select Validate JSON. The tool checks the JSON syntax and indicates whether the data is valid. If the JSON contains a syntax error, use the error information to locate and correct the problem.
            </p>
          </div>
        </article>

        {/* Section 5: Why Use a JSON Formatter? */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            Why Use a JSON Formatter?
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            <p>
              Formatted JSON is easier to read and troubleshoot than a long, unformatted JSON string. A JSON formatter can save time when working with API responses, configuration files, application data, and development projects.
            </p>
          </div>
        </article>

        {/* Section 6: Frequently Asked Questions */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-slate-100 space-y-4 pt-1">
            {/* FAQ 1 */}
            <details
              open
              className="group pt-4 first:pt-0 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-slate-800 cursor-pointer list-none select-none hover:text-indigo-600 transition-colors">
                <span>Is this JSON Formatter free?</span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                <p>
                  Yes. You can use the available JSON formatting and validation features directly in your web browser without installing a separate desktop application.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details
              open
              className="group pt-4 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-slate-800 cursor-pointer list-none select-none hover:text-indigo-600 transition-colors">
                <span>What is the difference between formatting and validation?</span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                <p>
                  Formatting makes JSON easier to read by adding indentation and structure. Validation checks whether the JSON follows the required syntax.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details
              open
              className="group pt-4 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-slate-800 cursor-pointer list-none select-none hover:text-indigo-600 transition-colors">
                <span>Can I minify JSON?</span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                <p>
                  Yes. The Minify feature removes unnecessary whitespace and line breaks to create a more compact JSON representation.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details
              open
              className="group pt-4 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-slate-800 cursor-pointer list-none select-none hover:text-indigo-600 transition-colors">
                <span>What happens if my JSON is invalid?</span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                <p>
                  The validator indicates that the JSON is invalid and provides error information that can help you locate the syntax problem.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details
              open
              className="group pt-4 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-slate-800 cursor-pointer list-none select-none hover:text-indigo-600 transition-colors">
                <span>Do I need to install software?</span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                <p>
                  No. The tool runs in a web browser, so you can use it without installing a separate JSON formatting application.
                </p>
              </div>
            </details>
          </div>
        </article>
      </div>
    </section>
  );
};
