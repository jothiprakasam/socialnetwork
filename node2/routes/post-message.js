const express = require("express");
const routesProf = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/usermodels");
const usermessage = require("../models/messagemodel");

routesProf.get("/messages", async (req, res) => {
  try {
    const messages = await usermessage.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = routesProf;
