const mongoose = require("mongoose");
const schema = mongoose.Schema;
const profileschema = new schema(
  {
    interest: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);
const ProfileModelRoute = mongoose.model("userp", profileschema);
module.exports = ProfileModelRoute;
