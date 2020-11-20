const mongoose = require("mongoose");

let repoSchema = mongoose.Schema({
  id: Number,
  repoid: Number,
  fullName: String,
  owner: String,
  ownerid: Number,
  url: String,
  description: String,
  count: Number,
});

module.exports = mongoose.model("Repos", repoSchema);
