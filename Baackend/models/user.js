const { Schema, model } = require("../connection");

const userSchema = new Schema({
  githubId: String,
  username: String,
  displayName: String,
  created_at: Date,
  
});


module.exports = model("user", userSchema);
