const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

// Environment variables with defaults
const port = parseInt(process.env.PORT || '3000', 10);
const hostname = process.env.HOSTNAME || 'localhost';
const dev = process.env.NODE_ENV !== 'production';

// Initialize Next.js instance
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Error handling function
const handleError = (err, res) => {
  console.error('Error occurred handling request:', err);
  res.statusCode = 500;
  res.end('Internal Server Error');
};

// Graceful shutdown handling
const gracefulShutdown = (server) => {
  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
      console.log('HTTP server closed');
      process.exit(0);
    });
  });
};

app.prepare()
  .then(() => {
    const server = createServer(async (req, res) => {
      try {
        // Parse URL
        const parsedUrl = parse(req.url, true);
        
        // Add basic security headers
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('X-Frame-Options', 'DENY');
        res.setHeader('X-XSS-Protection', '1; mode=block');
        
        // Handle the request
        await handle(req, res, parsedUrl);
      } catch (err) {
        handleError(err, res);
      }
    });

    // Enable keep-alive connections
    server.keepAliveTimeout = 65000;
    server.headersTimeout = 66000;

    // Start listening
    server.listen(port, hostname, (err) => {
      if (err) throw err;
      console.log(
        `> Server listening at http://${hostname}:${port} as ${
          dev ? 'development' : process.env.NODE_ENV
        }`
      );
    });

    // Setup graceful shutdown
    gracefulShutdown(server);
  })
  .catch((err) => {
    console.error('Error starting server:', err);
    process.exit(1);
  });