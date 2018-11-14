const express = require("express");

const router = express.Router();

router.get("/products", (req, res, next) => {
  res.send(`
    <form method="POST" action="/add-product">
      <input name="product">
      <button>Add Product</button>
    </form>
  `);
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
