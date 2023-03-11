const mongoose = require("mongoose");

const { Schema } = mongoose;

const CategorySchema = new Schema({
  title: String,
  products: [],
  creator: String,
  created_at: String,
});

const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;
