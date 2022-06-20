const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


const { usersdata } = require("./usersdata");

  
const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options); 

  try {
    await client.connect()
    console.log("connected!");

    const db = client.db("artMarketplace");
    
    const result = await db.collection("users").insertMany(usersdata);
    console.log("Success these been added", result)

  } catch (err) {
    console.log(err.message)
  }
  client.close()
  console.log("disconnected!")
}

batchImport()