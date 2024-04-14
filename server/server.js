const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const mongoose = require("mongoose");
const cors = require("cors");
const { Console } = require("console");
const EarthWanderersModel = require("./models/earth-wanderers");

const app = express();
const port = 5000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

mongoose.connect(
  "mongodb+srv://Techsam:Jestersammy10*@cluster0.38ug5t2.mongodb.net/"
);

const connect = mongoose.connection;

connect.once("open", () => {
  console.log("connected to database");
});

connect.on("error", () => {
  console.log("could not connected to database");
});

app.get("/signup", (res, req) => {
  res.redirect(__dirname + "..client/src/pages/signup.js");

  EarthWanderersModel.create(req.body)
    .then((earthwanderers) => {
      res.JSON?.stringify(earthwanderers);
    })
    .catch((error) => {
      res.JSON?.stringify(error);
    });

  let name = req.body.username;

  let email = req.body.email;

  let Password = req.body.Password;

  const userDetails = [name, email, Password];

  console.log(userDetails);
});

app.listen(process.env.PORT || port, (request, response) => {
  console.log("server started on port" + " " + port);
});
