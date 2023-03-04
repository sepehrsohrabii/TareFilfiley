require("dotenv").config({
  path: "./variables.env",
});
const express = require("express");
// const router = require("./routes/routes");
const morgan = require("morgan");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const errorHandler = require("./helpers/errorHandler");
const mongodb = require("./configs/db");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
