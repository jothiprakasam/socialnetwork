const express = require("express");
const routes1 = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/usermodels");

routes1.get("/", (req, res) => {
  res.status(200).render("signup");
});
routes1.post("/", async (req, res) => {
  const username = req.body.username.trim();
  const name = req.body.name.trim();
  const email = req.body.email.trim();
  const password = req.body.password;
  //const confirmPassword = req.body.confirmpassword;
  if (name && username && email && password) {
    const user = await User.findOne({
      $or: [{ username: username }, { email: email }],
    }).catch((err) => {
      console.log(err);
      return res.status(200).render("signup");
    });
    if (user == null) {
      //store in database
      const data = req.body;
      data.password = await bcrypt.hash(password, 10);
      User.create(data).then((data) => {
        return res.redirect("/home");
      });
    } else {
      res.send("already registered");
    }
  } else {
    console.log("SOMETHING WENT WRONG");
    return res.status(200).render("signup");
  }
});

module.exports = routes1;
