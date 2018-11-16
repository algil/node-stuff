const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    title: "Add Product",
    path: "/admin/add-product"
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
