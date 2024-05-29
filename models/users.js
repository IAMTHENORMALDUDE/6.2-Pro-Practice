const connectToDatabase = require("../dbConnection");

class UserModel {
  constructor({ firstName, lastName, email, password }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  async createUser() {
    const connection = await connectToDatabase();
    return connection.collection("users").insertOne({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    });
  }
}

module.exports = UserModel;