const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userschema = new schema(
  {
    name: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    confirmpassword: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userschema);
module.exports = User;
