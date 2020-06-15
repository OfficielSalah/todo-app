const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
//const cors = require("cors");
//const mongoose = require("mongoose");
const error = require("./routes/error");

require("dotenv").config();

const PORT = process.env.PORT || 1337;

let app = express();

app.use(express.static("public"));
app.use(helmet());
app.use(morgan("common"));
/*app.use(cors({
    origin: process.env.CORS_ORIGIN,
  }));
app.use(express.json());*/

app.get("/", (_req, res) => {
  res.render("index");
});

app.use(error.notfound);
app.use(error.errorhandler);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log(`Your Site is Hosted On URL = http://localhost:${PORT}`);
});
