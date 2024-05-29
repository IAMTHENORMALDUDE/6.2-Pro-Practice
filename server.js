const express = require("express");
const usersRouter = require("./routers/users");
const connectToDatabase = require("./dbConnection");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", usersRouter);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log("App listening on port", port);
  await connectToDatabase();
});