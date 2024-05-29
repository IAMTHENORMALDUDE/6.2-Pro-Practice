const express = require("express");
const users = express.Router();
const userController = require("../controllers/users");

users.get("/", userController.listUsers);

users.post("/", userController.createUser);

module.exports = users;