const { MongoClient } = require("mongodb");
const uri =
"mongodb+srv://farid:farid1234@cluster0.iiqckff.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

async function connectToDatabase() {
  if (!dbConnection) {
    try {
      await client.connect();
      console.log("Connected successfully to MongoDB");
      dbConnection = client.db("farid");
    } catch (err) {
      console.error("Failed to connect to MongoDB", err);
      throw err;
    }
  }
  return dbConnection;
}

module.exports = connectToDatabase;