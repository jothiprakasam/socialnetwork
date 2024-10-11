const express = require("express");
const profileuser = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/usermodels");
const interest_model = require("../models/profilemodel");
profileuser.post("/", async (req, res) => {
  try {
    const { interest } = req.body;
    await interest_model.ProfileModelRoute.create(interest).then((interest) => {
      return res.redirect("/profile");
    });

    console.log(interest);
  } catch {
    console.error();
  }
});
module.exports = profileuser;
