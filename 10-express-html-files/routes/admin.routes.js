const path = require("path");
const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  const file = path.join(__dirname, "../", "views", "add-product.html");
  res.sendFile(file);
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
