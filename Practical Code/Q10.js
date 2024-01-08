const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response
  res.end('Hello world, This is my Node.js server\n');
});

const PORT = 10000;

// Listen on port 10000 or a free port beyond 10000
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
