const { MongoClient } = require("mongodb");

require("dotenv").config();
// const cloudinary = require("./utilities/cloudinary");
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const handleSignUp = async (req,res) => {
  const client = new MongoClient(MONGO_URI, options);
  
  try {
    await client.connect()
    console.log("connected!");

    const db = client.db("artMarketplace");
    await db.collection("users").insertOne(req.body)
    
    res.status(200).json({status:200, data:req.body, message:"New user added"})
  } catch (error) {
    res.status(400).json({status:400, message:"Couldn't sign up user."})
  }
  client.close()
  console.log("disconnected!")
};

module.exports = {
  handleSignUp,
}