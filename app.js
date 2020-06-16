const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const error = require("./routes/error");
const todos = require("./routes/todos");

require("dotenv").config();

const PORT = process.env.PORT || 1337;

let app = express();
app.use(express.static("./public"));

app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use(express.json());

app.use("/", todos);

app.use(error.notfound);
app.use(error.errorhandler);

app.listen(PORT, () => {
  console.log(`Your Site is Hosted On URL = http://localhost:${PORT}`);
});
