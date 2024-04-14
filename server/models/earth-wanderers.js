const mongoose = require("mongoose");

const EarthWanderersSchema = new mongoose.Schema({
  username: String,
  email: String,
  Password: String,
  Password2: String,
});

const EarthWanderersModel = mongoose.model(
  "earthwanderers",
  EarthWanderersSchema
);

module.exports = EarthWanderersModel;
