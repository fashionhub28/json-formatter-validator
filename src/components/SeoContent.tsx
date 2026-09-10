import React from 'react';

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
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-6">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-slate-100 space-y-6 pt-1">
            {/* FAQ 1 */}
            <div className="pt-4 first:pt-0">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                What is a JSON formatter?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                A JSON formatter converts compact or difficult-to-read JSON into a clean, structured, and readable format.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                How do I validate JSON?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                Paste your JSON into the editor and select Validate JSON. The tool checks the JSON syntax and indicates whether the data is valid.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                Is this JSON formatter free?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                Yes. The JSON formatting, validation, beautify, and minify features are available directly in the browser.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                Is my JSON uploaded to a server?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                No. The tool processes JSON locally in the user&apos;s browser and does not upload the JSON to a server.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
