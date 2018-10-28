"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
    <head>
      <title>My first webpage</title>
    </head>
    <body>
      <h1>Hello from Node Server!</h1>
      <h2>Some request info</h2>
      <ul>
        <li>URL: ${req.url}</li>
        <li>Method: ${req.method}</li>
        <li>Host: ${req.headers.host}</li>
      </ul>
    </body>
    </html>
  `);
  res.end();
});

server.listen(3000);
