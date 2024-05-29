const UserModel = require("../models/users");

const listUsers = async (req, res) => {
    const connection = await connectToDatabase();
    const data = connection.collection("users").find({}).toArray();
    res.json({ statusCode: 200, data, message: "success" });
};

const createUser = async (req, res) => {
    const User = await new UserModel(req.body).createUser();
    res.json({ statusCode: 200, message: "success" });
};

module.exports = { listUsers, createUser };