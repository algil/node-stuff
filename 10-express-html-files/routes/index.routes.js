const express = require("express");
const { getViewFile } = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(getViewFile("index"));
});

module.exports = router;
