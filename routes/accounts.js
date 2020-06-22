const express = require("express");

let accounts = express.Router();

accounts.get("/", (_req, res) => {
  res.send("yeeey");
});

module.exports = accounts;
