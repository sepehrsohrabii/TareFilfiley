const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = new Schema({
  image: String,
  title: String,
  description: String,
  category: String,
  creator: String,
  created_at: String,
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
