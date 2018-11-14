"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const indexRoutes = require("./routes/index.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(indexRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Listen on port 3000");
});
