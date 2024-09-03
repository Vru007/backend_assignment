const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  address: String,
  transactions:Array, 
},
{timestamps:true}

);
const User = mongoose.model("User", userSchema);
module.exports = User;
