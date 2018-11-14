"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const { getViewFile, publicDir } = require("./util/path");

const indexRoutes = require("./routes/index.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(publicDir));

app.use(indexRoutes);
app.use("/admin", adminRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(getViewFile("404"));
});

app.listen(3000, () => {
  console.log("Listen on port 3000");
});
