const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { Console } = require("console");

//Database construction
const mongoose = require("mongoose");
const url = mongoose.connect("mongodb://locahost:27017/newsLetterDB", {
  useNewUrlParser: true,
});

const newsLetterSchema = new mongoose.Schema({
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  email: req.body.email,
});

const NewsLetter = mongoose.model("NewsLetter", newsLetterSchema);
NewsLetter.save();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.listen(process.env.PORT || port, (request, response) => {
  console.log("server started on port" + " " + port);
});
