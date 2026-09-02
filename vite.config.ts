import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function sitemapPlugin(): Plugin {
  const serveStaticFile = (req: any, dir: string, res: any, next: any) => {
    const url = req.url?.split('?')[0];
    if (!url) return false;

    let targetFile: string | null = null;
    let contentType = 'text/html; charset=utf-8';

    if (url === '/sitemap.xml') {
      targetFile = 'sitemap.xml';
      contentType = 'application/xml; charset=utf-8';
    } else if (url === '/robots.txt') {
      targetFile = 'robots.txt';
      contentType = 'text/plain; charset=utf-8';
    } else if (url === '/about' || url === '/about.html') {
      targetFile = 'about.html';
    } else if (url === '/privacy' || url === '/privacy.html') {
      targetFile = 'privacy.html';
    } else if (url === '/contact' || url === '/contact.html') {
      targetFile = 'contact.html';
    } else if (url === '/google15b596f3b9a62c24.html' || (url.startsWith('/google') && url.endsWith('.html'))) {
      targetFile = url.replace(/^\//, '');
      contentType = 'text/html; charset=utf-8';
    }

    if (targetFile) {
      const filePath = path.resolve(__dirname, dir, targetFile);
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');

        // Dynamically align domain for sitemap and robots if requested from a specific host
        if (targetFile === 'sitemap.xml' || targetFile === 'robots.txt') {
          const rawHost = (req?.headers?.['x-forwarded-host'] || req?.headers?.['host'] || '') as string;
          const host = rawHost.split(',')[0].trim().split(':')[0];
          if (host && host !== 'localhost' && host !== '127.0.0.1') {
            const proto = (req?.headers?.['x-forwarded-proto'] || 'https') as string;
            const currentOrigin = `${proto}://${host}`;
            content = content
              .replaceAll('https://ais-pre-nlwk73b4isewf4dxqb7vq6-828241684977.asia-southeast1.run.app', currentOrigin)
              .replaceAll('https://ais-dev-nlwk73b4isewf4dxqb7vq6-828241684977.asia-southeast1.run.app', currentOrigin);
          }
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Cache-Control', 'public, max-age=3600');
        res.end(content);
        return true;
      }
    }
    return false;
  };

  return {
    name: 'sitemap-server-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!serveStaticFile(req, 'public', res, next)) {
          next();
        }
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!serveStaticFile(req, 'dist', res, next)) {
          next();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), sitemapPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
