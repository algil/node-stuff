const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  const file = path.join(__dirname, "..", "views", "index.html");
  res.sendFile(file);
});

module.exports = router;
