const express = require("express");
const fs = require("fs");

let todoList = express.Router();

todoList.get("/", (_req, res) => {
  let rawdata = JSON.parse(fs.readFileSync("./public/todoList.json"));
  res.json(rawdata);
});

module.exports = todoList;
