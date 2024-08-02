const mongoose = require("mongoose");
const express = require("express");
const app = express();
const postModel = require("./models/post.model.js");
const userModel = require("./models/user.model.js");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// app.use(cookieParser())
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser);
app.post("/create", async (req, res) => {
  const { username, name, age, email, password } = req.body;
  let alreadyRegister = await userModel.findOne({ email });
  // if (alreadyRegister) {
  //   res.send("error");
  //   return;
  // }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModel.create({
        username,
        name,
        age,
        email,
        password: hash,
      });
      let token =jwt.sign({ email:email, userid: user._id }, "secret");
     
  });
  })
  res.send("created");
});

let connect = async () => {
  await mongoose.connect("mongodb://localhost:27017/miniproject");
};
connect();
app.listen(3500, () => {
  console.log("app is running on port 6000");
});
