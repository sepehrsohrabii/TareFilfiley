const mongoose = require("mongoose");

const { Schema } = mongoose;

const RestaurantSchema = new Schema({
  title: String,
  image: String,
  opening_times: String,
  creator: String,
  created_at: String,
});

const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

module.exports = RestaurantModel;
