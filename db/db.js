const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await process.env.MONGO_URI;
    console.log("database connected successfully");
  } catch (error) {
    console.log("Connection error in Database");
  }
};


module.exports = connectDb