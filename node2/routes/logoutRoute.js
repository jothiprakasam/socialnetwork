const express = require("express");
const routes2 = express.Router();
routes2.get("/", (req, res) => {
  if (req.session) {
    req.session.destroy((req, res) => {
      res.redirect("/login");
    });
  }
});
module.exports = routes2;
