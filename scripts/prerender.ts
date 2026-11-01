import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function run() {
  console.log('Starting static prerender for JSON Formatter & Validator...');
  const appHtml = ReactDOMServer.renderToString(React.createElement(App));
  console.log(`Rendered <App /> to HTML string (${appHtml.length} characters)`);

  const rootDir = path.resolve(__dirname, '..');
  
  // 1. Update dist/index.html if dist folder exists
  const distIndexPath = path.join(rootDir, 'dist', 'index.html');
  if (fs.existsSync(distIndexPath)) {
    let distHtml = fs.readFileSync(distIndexPath, 'utf-8');
    distHtml = distHtml.replace(
      /<div id="root">[\s\S]*?<\/div>/,
      `<div id="root">${appHtml}</div>`
    );
    fs.writeFileSync(distIndexPath, distHtml, 'utf-8');
    console.log('Successfully injected static HTML into dist/index.html');
  }

  // 2. Also ensure root index.html contains the static HTML for immediate dev/crawler responses
  const rootIndexPath = path.join(rootDir, 'index.html');
  if (fs.existsSync(rootIndexPath)) {
    let indexHtml = fs.readFileSync(rootIndexPath, 'utf-8');
    indexHtml = indexHtml.replace(
      /<div id="root">[\s\S]*?<\/div>/,
      `<div id="root">${appHtml}</div>`
    );
    fs.writeFileSync(rootIndexPath, indexHtml, 'utf-8');
    console.log('Successfully updated index.html with static pre-rendered HTML');
  }

  // 3. Ensure subdirectories in dist have index.html
  const distDir = path.join(rootDir, 'dist');
  if (fs.existsSync(distDir)) {
    const pages = ['about', 'privacy', 'terms', 'contact'];
    for (const page of pages) {
      const pageDir = path.join(distDir, page);
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
      }
      const srcHtml = path.join(rootDir, 'public', `${page}.html`);
      const targetIndex = path.join(pageDir, 'index.html');
      if (fs.existsSync(srcHtml)) {
        fs.copyFileSync(srcHtml, targetIndex);
        console.log(`Ensured dist/${page}/index.html exists for directory index routing`);
      }
    }
  }

  console.log('Static prerendering completed successfully!');
}

run();
