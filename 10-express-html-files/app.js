"use strict";

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const indexRoutes = require("./routes/index.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(indexRoutes);
app.use("/admin", adminRoutes);

app.use((req, res, next) => {
  const file = path.join(__dirname, "views", "404.html");
  res.status(404).sendFile(file);
});

app.listen(3000, () => {
  console.log("Listen on port 3000");
});
