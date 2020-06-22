const express = require("express");
const morgan = require("morgan"); // dev-dependecie used as logger
const helmet = require("helmet"); // dependecie for security (headers)
const cors = require("cors"); // dependecie used for api security (accept requests only from front-end)

//import routes

const error = require("./routes/error");
const todoList = require("./routes/todoList");
const ideas = require("./routes/ideas");
const accounts = require("./routes/accounts");

// configure .env file

require("dotenv").config();

// setting up the port

const PORT = process.env.PORT || 9229;

// creating the app

let app = express();

// using public folder as source for data
app.use(express.static("./public"));

// applying dependecies for the app

app.use(helmet());
app.use(morgan("common"));
app.use(cors());

//using routes

app.use("/", todoList);
app.use("/ideas", ideas);
app.use("/accounts", accounts);

//error handler

app.use(error.notFound);
app.use(error.errorHandler);

//listening at requests

app.listen(PORT, () => {
  console.log(`Your Site is Hosted On URL = http://localhost:${PORT}`);
});
