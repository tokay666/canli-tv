import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { Readable } from 'stream';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Resolve absolute path helper inside proxy
  function resolveUrl(baseUrl: string, relativeUrl: string): string {
    try {
      return new URL(relativeUrl, baseUrl).toString();
    } catch (e) {
      return relativeUrl;
    }
  }

  // Preflight CORS support for the proxy endpoint
  app.options('/api/proxy', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.sendStatus(200);
  });

  // HLS Stream Proxy to bypass Mixed Content restrictions and CORS issues
  app.get('/api/proxy', async (req, res) => {
    const targetUrl = req.query.url as string;
    
    if (!targetUrl) {
      return res.status(400).send('Missing "url" parameter');
    }

    try {
      // Fetch resources from the upstream target
      const response = await fetch(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': '*/*',
          'Accept-Encoding': 'identity'
        }
      });

      if (!response.ok) {
        return res.status(response.status).send(`Upstream request failed with status: ${response.statusText}`);
      }

      // If a redirect occurs, the base URL for relative paths changes to the final redirected URL
      const finalUrl = response.url || targetUrl;
      const contentType = response.headers.get('content-type') || '';

      // Determine playlist vs binary segments (.ts)
      const isPlaylist = 
        finalUrl.toLowerCase().split('?')[0].endsWith('.m3u8') ||
        contentType.toLowerCase().includes('mpegurl') ||
        contentType.toLowerCase().includes('m3u8') ||
        contentType.toLowerCase().includes('text/');

      if (isPlaylist) {
        const text = await response.text();
        
        // Double check is m3u8 format
        if (text.includes('#EXTM3U') || text.includes('#EXT-X-')) {
          const lines = text.split(/\r?\n/);
          
          const rewrittenLines = lines.map(line => {
            const trimmed = line.trim();
            if (!trimmed) return line;

            // Handle metadata line
            if (trimmed.startsWith('#')) {
              // Parse URI attributes inside tags (e.g. key links or sub-alternative audio/video streams)
              return line.replace(/URI="([^"]+)"/g, (match, p1) => {
                const absolute = resolveUrl(finalUrl, p1);
                return `URI="/api/proxy?url=${encodeURIComponent(absolute)}"`;
              });
            }

            // Map segment URLs to proxy
            const absolute = resolveUrl(finalUrl, trimmed);
            return `/api/proxy?url=${encodeURIComponent(absolute)}`;
          });

          res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Headers', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
          return res.send(rewrittenLines.join('\n'));
        }
      }

      // Otherwise stream binary segments (MPEG-TS chunks)
      res.setHeader('Content-Type', contentType);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

      if (response.body) {
        Readable.fromWeb(response.body as any).pipe(res);
      } else {
        const buffer = await response.arrayBuffer();
        res.send(Buffer.from(buffer));
      }

    } catch (err: any) {
      console.error('IPTV stream proxy exception:', err);
      res.status(502).send(`IPTV stream proxy error: ${err.message}`);
    }
  });

  // Serve static assets or mount Vite dev middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express server with IPTV proxy running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
