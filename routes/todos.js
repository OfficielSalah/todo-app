const express = require("express");
const fs = require("fs");

let todosRouter = express.Router();

todosRouter.get("/", (_req, res) => {
  let rawdata = JSON.parse(fs.readFileSync("./public/todos.json"));
  res.json(rawdata);
});

module.exports = todosRouter;
