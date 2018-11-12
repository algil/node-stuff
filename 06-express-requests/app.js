"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/products", (req, res, next) => {
  res.send(`
    <form method="POST" action="/add-product">
      <input name="product">
      <button>Add Product</button>
    </form>
  `);
});

app.use("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000, () => {
  console.log("Listen on port 3000");
});
