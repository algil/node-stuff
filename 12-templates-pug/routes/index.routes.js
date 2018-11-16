const express = require("express");
const data = require("../data");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", {
    title: "My Shop",
    path: "/",
    products: data.products
  });
});

module.exports = router;
