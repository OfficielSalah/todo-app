const express = require("express");

let ideas = express.Router();

ideas.get("/", (_req, res) => {
  res.send("heey");
});

module.exports = ideas;
