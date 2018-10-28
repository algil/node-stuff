"use strict";

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write(getIndexHtmlContent());
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      console.log(parseBody);
      fs.writeFileSync("02-parsing-request-body/message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

function getIndexHtmlContent() {
  return `
  <html>
  <head>
    <title>Redirecting request</title>
  </head>
  <body>
    <h1>Write a message</h1>
    <form action="/message" method="POST">
      <input name="message">
      <button>Send</button>
    </form>
  </body>
  </html>`;
}

server.listen(3000, () => {
  console.log("Listen on port 3000");
});
