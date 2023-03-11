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
const mongodb = require("./configs/db");
const router = require("./routes/routes");

const app = express();
const port = process.env.PORT || 3000;
app.use(cookieParser());
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    // resave: false,
    // saveUninitialized: true,
    // cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
