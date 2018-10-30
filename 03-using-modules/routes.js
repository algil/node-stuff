"use strict";

const fs = require("fs");

const requestHandler = (req, res) => {
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

    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      console.log(parseBody);
      fs.writeFile("03-using-modules/message.txt", message, error => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

const getIndexHtmlContent = () => {
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
};

exports.handler = requestHandler;
