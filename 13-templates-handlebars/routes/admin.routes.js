const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    title: "Add Product",
    formCss: true,
    productCss: true,
    activeAddProduct: true
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
