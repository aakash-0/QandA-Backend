const mongoose = require("mongoose");

require("dotenv").config();

const connect = () => {
  mongoose.connect("mongodb+srv://AAKASH:MghJ7nDWikcps63@cluster0.dbvxv.mongodb.net/?retryWrites=true&w=majority");
  console.log("connected")
};

module.exports = connect;
