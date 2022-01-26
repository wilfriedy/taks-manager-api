const mongoose = require("mongoose");

function connectDb(url) {
  return mongoose.connect(url).then(console.log("connected to database"));
}

module.exports = connectDb;
