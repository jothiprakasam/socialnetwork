const express = require("express");
const routes = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/usermodels");

routes.get("/", (req, res) => {
  res.status(200).render("register1");
});
routes.post("/", async (req, res) => {
  const username = req.body.username.trim();
  const password = req.body.password.trim();
  if (username && password) {
    const user = await User.findOne({ username: username }).catch((err) => {
      console.log(err);
    });
    console.log(user);
    if (user != null) {
      const result = await bcrypt.compare(password, user.password);
      if (result == true) {
        req.session.jpr = user;
        //res.send("all well");
        return res.redirect("/home");
      } else {
        res.status(200).render("register1");
      }
    } else {
      res.status(200).render("register1");
    }
  }
  res.status(200).render("register1");
});
module.exports = routes;
