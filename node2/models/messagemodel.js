const mongoose = require("mongoose");
const schema = mongoose.Schema;
const messageschema = new schema(
  {
    email: { type: String, required: true, trim: true },

    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);
const usermessage = mongoose.model("userm", messageschema);
module.exports = usermessage;
