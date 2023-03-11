const express = require("express");
const signupController = require("../controllers/signupController");
const { isNotLoggedIn } = require("../helpers/auth");

const router = express.Router();

router.get("/signup", isNotLoggedIn, signupController.get);
router.post(
  "/signup",
  isNotLoggedIn,
  body("username").not().isEmpty(),
  body("email").isEmail().normalizeEmail().toLowerCase(),
  body("password").isLength({ min: 6 }),
  signupController.post
);
