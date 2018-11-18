"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const { publicDir } = require("./util/path");

const indexRoutes = require("./routes/index.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts",
    defaultLayout: "main-layout",
    extname: "hbs"
  })
);
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(publicDir));

app.use(indexRoutes);
app.use("/admin", adminRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

app.listen(3000, () => {
  console.log("Listen on port 3000");
});
