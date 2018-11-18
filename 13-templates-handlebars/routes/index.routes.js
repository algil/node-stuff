const express = require("express");
const data = require("../data");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", {
    title: "My Shop",
    products: data.products,
    hasProducts: data.products.length > 0,
    productCss: true,
    activeIndex: true
  });
});

module.exports = router;
