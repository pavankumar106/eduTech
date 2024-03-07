const mongoose = require("mongoose");
require("dotenv").config();

exports.database = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("db connected successfully"))
    .catch((error) => {
      console.log("db connection failed");
      console.error(error);
      process.exit(1);
    });
};
