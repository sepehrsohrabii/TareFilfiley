const mongoose = require("mongoose");

const { Schema } = mongoose;

const RestaurantSchema = new Schema({
  title: String,
  image: String,
  description: String,
  created_at: String,
  category: String,
});

const RestaurantModel = mongoose.model("posts", RestaurantSchema);

module.exports = RestaurantModel;
