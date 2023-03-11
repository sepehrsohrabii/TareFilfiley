const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  restaurants: [],
  created_at: String,
});

const UserModel = mongoose.model("User", UserSchema);

UserModel.validPassword = (user, pwd) => bcrypt.compareSync(pwd, user.password);

UserModel.encryptPassword = async (myPlainTextPassword) => {
  const saltRounds = Number(process.env.SALT_ROUNDS) || 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hash = await bcrypt.hashSync(myPlainTextPassword, salt);
  return hash;
};

module.exports = UserModel;
