const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


const { usersdata } = require("./usersdata");
const { v4: uuidv4 } = require("uuid");
  console.log(usersdata)
const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options); 

  try {
    await client.connect()
    console.log("connected!");

    const db = client.db("artMarketplace");
    
    const result = await db.collection("users").insertMany(usersdata);
    console.log("Success flights added", usersdata)

  } catch (err) {
    console.log(err.message)
  }
  client.close()
  console.log("disconnected!")
}

batchImport()