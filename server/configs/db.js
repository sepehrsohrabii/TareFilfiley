const mongoose = require("mongoose");

const mongodb = {
  connect: () => {
    mongoose
      .connect("mongodb://localhost:27017/tarefilfiley_db", {
        useNewUrlParser: true,
      })
      .catch((error) => console.error(error));
  },
};

module.exports = mongodb;
