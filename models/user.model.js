const mongoose = require("mongoose");

module.exports = mongoose.model(
  "user",
  mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,posts:[{
      type:mongoose.Schema.Types.ObjectId,ref:"post"
    }]
  })
);
