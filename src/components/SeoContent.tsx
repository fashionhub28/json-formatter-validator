import React from 'react';

export const SeoContent: React.FC = () => {
  return (
    <section
      id="informational-guide"
      aria-label="JSON Formatter and Validator Educational Guide"
      className="mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-slate-200 text-slate-700"
    >
      <div className="space-y-8 sm:space-y-10">

        {/* Section 1: What Is a JSON Formatter and Validator? */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            1. What Is a JSON Formatter and Validator?
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            <p>
              JavaScript Object Notation (JSON) is a lightweight, text-based data interchange format widely used across REST APIs, microservices, configuration files, and database records. In network transmissions, JSON is usually serialized as a continuous, unindented string to conserve bandwidth.
            </p>
            <p>
              A <strong>JSON Formatter</strong> (often called a beautifier) reorganizes this raw text by introducing consistent indentation (such as 2 spaces, 4 spaces, or tabs) and line breaks. Formatting changes the visual presentation for human readability, not the underlying data structure. When serializing data, standard tools like <code>JSON.stringify</code> may normalize insignificant whitespace, numeric representations (for example, displaying <code>1.0</code> as <code>1</code> or <code>1e2</code> as <code>100</code>), and object key ordering while preserving the parsed data.
            </p>
            <p>
              A <strong>JSON Validator</strong> parses the text against standard JSON grammar specifications. It systematically verifies syntax rules—such as ensuring strings are enclosed in double quotes, delimiters are correctly placed, and trailing commas are omitted. While syntax validation helps catch syntax errors before sending payloads across networks, it cannot guarantee that an API request will succeed, as web services also enforce authentication, schema constraints, and business logic.
            </p>
          </div>
        </article>

        {/* Section 2: How to Format and Validate JSON */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            2. How to Format and Validate JSON
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            <p>
              You can format, validate, or minify your data directly in your browser using the workbench above:
            </p>
            <ol className="list-decimal list-inside space-y-2.5 text-sm sm:text-base text-slate-600 marker:font-semibold marker:text-indigo-600">
              <li><strong>Enter or Paste JSON:</strong> Paste your raw JSON string into the input editor on the left. The editor supports the <kbd className="px-1.5 py-0.5 text-xs bg-slate-100 border border-slate-300 rounded font-mono">Tab</kbd> key for quick indentation adjustments.</li>
              <li><strong>Select Your Formatting Preference:</strong> Choose your desired indentation style (<strong>2 Spaces</strong>, <strong>4 Spaces</strong>, or <strong>Tab</strong>) or choose <strong>Minify</strong> from the toolbar.</li>
              <li><strong>Format or Validate:</strong> Click <strong>&ldquo;Format JSON&rdquo;</strong> (or press <kbd className="px-1.5 py-0.5 text-xs bg-slate-100 border border-slate-300 rounded font-mono">Ctrl + Enter</kbd> / <kbd className="px-1.5 py-0.5 text-xs bg-slate-100 border border-slate-300 rounded font-mono">Cmd + Enter</kbd> on macOS). If you only want to verify syntax without reformatting, click <strong>&ldquo;Validate JSON&rdquo;</strong>.</li>
              <li><strong>Review Diagnostics:</strong> If valid, a green status confirmation appears displaying payload statistics (type, item count, and line count). If invalid, a diagnostic banner details the error message and provides line and column coordinates alongside an ASCII caret pointer (<code>^</code>) when available from the engine.</li>
              <li><strong>Copy or Download:</strong> Use <strong>&ldquo;Copy&rdquo;</strong> to store the formatted output on your clipboard, or click <strong>&ldquo;Save&rdquo;</strong> to download a clean <code>formatted.json</code> file.</li>
            </ol>
          </div>
        </article>

        {/* Section 3: JSON Formatting vs Minification */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            3. JSON Formatting vs Minification
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl mb-6">
            <p>
              Formatting and minifying serve two distinct operational needs:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-1">
              <li><strong>Formatting:</strong> Inserts consistent indentation and line breaks to assist human developers in reading, debugging, reviewing pull requests, and inspecting complex hierarchical trees.</li>
              <li><strong>Minification:</strong> Strips insignificant whitespace (spaces, tabs, and newlines outside string literals) to compact data. While minification reduces payload size compared to formatted text, it does not guarantee the globally smallest possible representation (which also relies on network compression algorithms like gzip or Brotli).</li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse border border-slate-200 rounded-lg">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="p-3 border border-slate-200 font-semibold">Aspect</th>
                  <th className="p-3 border border-slate-200 font-semibold">Formatted JSON</th>
                  <th className="p-3 border border-slate-200 font-semibold">Minified JSON</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="p-3 border border-slate-200 font-medium text-slate-800">Primary Purpose</td>
                  <td className="p-3 border border-slate-200">Human readability, code review, debugging</td>
                  <td className="p-3 border border-slate-200">Network transmission, storage efficiency</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-medium text-slate-800">Insignificant Whitespace</td>
                  <td className="p-3 border border-slate-200">Preserved with structured indentation</td>
                  <td className="p-3 border border-slate-200">Completely stripped</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-medium text-slate-800">Payload Size</td>
                  <td className="p-3 border border-slate-200">Larger (due to indent spaces and newlines)</td>
                  <td className="p-3 border border-slate-200">Smaller (reduced to essential syntax characters)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-medium text-slate-800">Parsed Data Structure</td>
                  <td className="p-3 border border-slate-200">Identical parsed values</td>
                  <td className="p-3 border border-slate-200">Identical parsed values</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        {/* Section 4: Valid and Invalid JSON Examples */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            4. Valid and Invalid JSON Examples
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed max-w-4xl">
            Examining valid structures alongside syntax failures helps illustrate how parsers evaluate input tokens sequentially:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Valid Example */}
            <div>
              <h3 className="font-semibold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Valid JSON (REST API Response)</span>
              </h3>
              <pre className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`{
  "status": 200,
  "success": true,
  "data": {
    "user": "alex_dev",
    "roles": ["editor", "admin"],
    "profile": {
      "verified": true,
      "reputation": 450,
      "bio": null
    }
  }
}`}
              </pre>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                <strong>Why it is valid:</strong> All keys and strings use double quotes, colons separate key-value pairs, commas delimit elements with no trailing commas, and valid primitives (strings, numbers, booleans, and <code>null</code>) are used.
              </p>
            </div>

            {/* Invalid Example */}
            <div>
              <h3 className="font-semibold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>Invalid JSON (Syntax Break)</span>
              </h3>
              <pre className="p-4 rounded-lg bg-slate-900 text-rose-300 font-mono text-xs overflow-x-auto leading-relaxed">
{`{
  "status": 200,
  "success": true
  "data": {
    "user": 'alex_dev',
    "roles": ["editor", "admin",]
  }
}`}
              </pre>
              <p className="text-xs text-rose-700 mt-2 leading-relaxed">
                <strong>Why it is invalid:</strong> Missing comma after <code>true</code> on line 3, illegal single quotes around <code>&apos;alex_dev&apos;</code> on line 5, and an illegal trailing comma after <code>&quot;admin&quot;</code> on line 6.
              </p>
            </div>
          </div>
        </article>

        {/* Section 5: Common JSON Syntax Errors and Fixes */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            5. Common JSON Syntax Errors and Fixes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed max-w-4xl">
            Because JSON shares syntactic roots with JavaScript, developers frequently encounter errors caused by applying JavaScript conventions that violate standard JSON rules:
          </p>

          <div className="space-y-4 max-w-4xl">
            {/* 5.1 Single Quotes */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">
                5.1 Single Quotes Instead of Double Quotes
              </h3>
              <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                Standard JSON strictly requires double quotation marks (<code>&quot;</code>) for all property keys and string values. Single quotes cause a syntax error.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-900">
                  <span className="font-sans font-bold text-rose-700 block mb-1">❌ Invalid:</span>
                  {`{ 'theme': 'dark' }`}
                </div>
                <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <span className="font-sans font-bold text-emerald-700 block mb-1">✓ Fixed:</span>
                  {`{ "theme": "dark" }`}
                </div>
              </div>
            </div>

            {/* 5.2 Trailing Commas */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">
                5.2 Trailing Commas After the Last Item
              </h3>
              <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                Trailing commas after the final property in an object or element in an array are valid in ECMAScript object literals, but strictly invalid in JSON.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-900">
                  <span className="font-sans font-bold text-rose-700 block mb-1">❌ Invalid:</span>
                  {`{ "id": 101, "active": true, }`}
                </div>
                <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <span className="font-sans font-bold text-emerald-700 block mb-1">✓ Fixed:</span>
                  {`{ "id": 101, "active": true }`}
                </div>
              </div>
            </div>

            {/* 5.3 Missing Commas */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">
                5.3 Missing Commas Between Properties
              </h3>
              <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                Every key-value pair or array element before a subsequent item must be separated by a comma. Without it, the parser cannot distinguish where one token ends and the next begins.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-900">
                  <span className="font-sans font-bold text-rose-700 block mb-1">❌ Invalid:</span>
                  {`{ "name": "App" "version": 1 }`}
                </div>
                <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <span className="font-sans font-bold text-emerald-700 block mb-1">✓ Fixed:</span>
                  {`{ "name": "App", "version": 1 }`}
                </div>
              </div>
            </div>

            {/* 5.4 Unquoted Property Keys */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">
                5.4 Unquoted Property Keys
              </h3>
              <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                In JavaScript, object literal keys can often be unquoted identifiers. In standard JSON, every property name must be wrapped in double quotes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-900">
                  <span className="font-sans font-bold text-rose-700 block mb-1">❌ Invalid:</span>
                  {`{ host: "localhost", port: 8080 }`}
                </div>
                <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <span className="font-sans font-bold text-emerald-700 block mb-1">✓ Fixed:</span>
                  {`{ "host": "localhost", "port": 8080 }`}
                </div>
              </div>
            </div>

            {/* 5.5 Unsupported JavaScript Types and Comments */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">
                5.5 Unsupported Types (undefined, NaN, Infinity) and Comments
              </h3>
              <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                Standard JSON does not support comments (<code>//</code> or <code>/* */</code>), <code>undefined</code>, <code>NaN</code>, <code>Infinity</code>, or functions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-900">
                  <span className="font-sans font-bold text-rose-700 block mb-1">❌ Invalid:</span>
                  {`{ "count": NaN, "token": undefined }`}
                </div>
                <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <span className="font-sans font-bold text-emerald-700 block mb-1">✓ Fixed:</span>
                  {`{ "count": null, "token": null }`}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Section 6: JSON Objects, Arrays and Data Types */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            6. JSON Objects, Arrays and Data Types
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl mb-5">
            <p>
              Standard JSON defines six specific data types. Under RFC 8259, a valid top-level JSON document is not required to be an object or an array; any valid JSON value (such as a bare string <code>&quot;hello&quot;</code>, number <code>42</code>, boolean <code>true</code>, or <code>null</code>) constitutes valid JSON text.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="font-semibold text-slate-900 text-sm mb-1">JSON Objects (<code>&#123;&#125;</code>)</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                Unordered collections of zero or more key-value pairs, where keys are double-quoted strings. Ideal for structured entity records.
              </p>
              <pre className="p-2.5 rounded bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto">
{`{ "name": "App", "enabled": true }`}
              </pre>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="font-semibold text-slate-900 text-sm mb-1">JSON Arrays (<code>[]</code>)</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                Ordered sequences of zero or more values separated by commas. Ideal for lists, queues, and grouped items.
              </p>
              <pre className="p-2.5 rounded bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto">
{`["read", "write", "execute"]`}
              </pre>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-slate-900 text-sm mb-2">The Six Permitted JSON Types</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 leading-relaxed">
              <li><strong>String:</strong> Unicode characters wrapped in double quotes (e.g. <code>&quot;text&quot;</code>).</li>
              <li><strong>Number:</strong> Integer or floating-point in base-10 (e.g. <code>100</code>, <code>-3.14</code>, <code>2e4</code>).</li>
              <li><strong>Boolean:</strong> Exactly <code>true</code> or <code>false</code> in lowercase.</li>
              <li><strong>Null:</strong> Exactly <code>null</code> in lowercase, representing an empty value.</li>
              <li><strong>Object:</strong> Comma-delimited key-value pairs wrapped in curly braces.</li>
              <li><strong>Array:</strong> Comma-delimited sequence of values wrapped in square brackets.</li>
            </ul>
          </div>
        </article>

        {/* Section 7: RFC 8259 JSON Syntax Rules */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            7. RFC 8259 JSON Syntax Rules
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            <p>
              This tool is designed around the syntax rules specified in RFC 8259 (The JavaScript Object Notation Data Interchange Format). Core requirements include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-1 text-sm sm:text-base text-slate-600">
              <li><strong>Character Encoding:</strong> JSON text exchanged between systems is expected to be encoded in UTF-8.</li>
              <li><strong>String Escaping:</strong> Quotation marks, backslashes, and control characters (U+0000 through U+001F) must be escaped (for example <code>\&quot;</code>, <code>\\\\</code>, <code>\\n</code>, <code>\\t</code>).</li>
              <li><strong>Number Representation:</strong> Numbers are written in base-10 without leading zeros (<code>01</code> is invalid). Hexadecimal (<code>0xFF</code>) and octal notations are not supported.</li>
              <li><strong>Strict Delimiters:</strong> Colons separate keys from values; commas separate elements. Trailing commas are strictly rejected.</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">
              Note: The tool is designed around standard RFC 8259 grammar rules. We do not claim official endorsement or certification by the IETF or any standards body.
            </p>
          </div>
        </article>

        {/* Section 8: Practical JSON Use Cases */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            8. Practical JSON Use Cases
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            <p>
              JSON is a ubiquitous data standard across modern software engineering workflows:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">RESTful &amp; Webhook Payloads</strong>
                <span className="text-xs">Inspecting HTTP request and response bodies when testing endpoints or integrating third-party APIs.</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Configuration Files</strong>
                <span className="text-xs">Managing developer configuration manifests such as <code>package.json</code>, <code>tsconfig.json</code>, or build settings.</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Document Databases</strong>
                <span className="text-xs">Reviewing document records in MongoDB, CouchDB, or relational JSON columns (PostgreSQL JSONB).</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">Log Inspection &amp; Debugging</strong>
                <span className="text-xs">Beautifying structured server logs, telemetry streams, and browser storage states for troubleshooting.</span>
              </div>
            </div>
          </div>
        </article>

        {/* Section 9: Privacy and Browser-Based Processing */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            9. Privacy and Browser-Based Processing
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            <p>
              JSON formatting, validation, and minification are performed locally in your browser. The entered JSON is not intentionally uploaded to a server for processing. All data transformations execute within your browser&apos;s JavaScript engine.
            </p>
            <p>
              To maintain transparency, please note that like most modern web utilities, standard external services like Google Analytics and Google AdSense make typical network requests for site measurement and ad delivery if active. However, your entered JSON content remains strictly within your browser session.
            </p>
            <div className="p-4 rounded-lg bg-amber-50/70 border border-amber-200 text-amber-900 text-sm">
              <p className="font-semibold mb-1">Security Best Practice Notice:</p>
              <p>
                As a standard security best practice, users should not paste passwords, private API keys, session tokens, database credentials, or other confidential information into browser-based utilities.
              </p>
            </div>
          </div>
        </article>

        {/* Section 10: Frequently Asked Questions */}
        <article className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-6">
            10. Frequently Asked Questions
          </h2>

          <div className="divide-y divide-slate-100 space-y-6 pt-1">
            {/* FAQ 1 */}
            <div className="pt-4 first:pt-0">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                What is JSON?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format that is easy for humans to read and write and simple for machines to parse and generate.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                What is a JSON formatter?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                A JSON formatter is a tool that converts unformatted, minified, or disorganized JSON text into a neatly indented and readable structure.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                What is a JSON validator?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                A JSON validator checks whether JSON data complies with official syntax rules and reports errors such as missing commas or mismatched brackets.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                How do I format JSON?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                Paste your JSON into the input editor on this page, choose your preferred indentation size, and click &quot;Format JSON&quot;.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                How do I check whether JSON is valid?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                Paste your data into the editor and click &quot;Validate JSON&quot;. The tool displays a green confirmation if it is valid or provides the line and column number of any syntax error.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                What is JSON beautification?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                JSON beautification is the process of adding consistent indentation, line breaks, and spacing to make JSON clean, readable, and easy to inspect.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                What is JSON minification?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                JSON minification removes all non-essential whitespace, line breaks, and indent spaces to create the smallest possible payload size for storage or transmission.
              </p>
            </div>

            {/* FAQ 8 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                Can I choose indentation size?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                Yes. You can switch between 2 spaces, 4 spaces, and tab indentation using the indentation selector in the toolbar.
              </p>
            </div>

            {/* FAQ 9 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                Can I format nested JSON?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                Yes. The formatter supports deeply nested objects, arrays, and complex hierarchies, indenting each level cleanly.
              </p>
            </div>

            {/* FAQ 10 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                Can I validate JSON before using it in an API?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                Yes. Validating your payload before sending it to an API helps avoid common HTTP 400 Bad Request responses caused by syntax errors.
              </p>
            </div>

            {/* FAQ 11 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                Does JSON formatter require installation?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                No. The tool runs directly inside your web browser without installing any desktop software or browser extensions.
              </p>
            </div>

            {/* FAQ 12 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                Is my JSON sent to a server?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                JSON formatting, validation, and minification are performed locally in your browser. The entered JSON is not intentionally uploaded to a server for processing.
              </p>
            </div>

            {/* FAQ 13 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                Can I use the tool on mobile devices?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                Yes. The application is fully responsive and functions smoothly across mobile smartphones, tablets, laptops, and desktop computers.
              </p>
            </div>

            {/* FAQ 14 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                Is JSON the same as JavaScript?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                No. While JSON syntax is derived from JavaScript object notation, JSON is a strict data format with stricter rules (e.g., keys must be double-quoted, no trailing commas, no functions or undefined values).
              </p>
            </div>

            {/* FAQ 15 */}
            <div className="pt-6">
              <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                Why is my JSON invalid?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                Common causes include missing commas between properties, single quotes around keys or strings instead of double quotes, trailing commas after the last item, or unmatched opening and closing braces.
              </p>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
};
