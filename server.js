const http = require('http');
const handler = require('./src/handler.js');

const server = http.createServer(handler);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Magic happens on port ${port}`);
});
