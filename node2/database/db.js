const mongoose = require("mongoose");
class database {
  constructor() {
    this.connect();
  }
  connect() {
    return mongoose
      .connect("mongodb://127.0.0.1:27017/project1")
      .then(() => {
        console.log("database connected");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = new database();
