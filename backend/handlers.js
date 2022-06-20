const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbname = "artMarketplace";
const { v4: uuidv4 } = require("uuid");


const getUsers = async (req,res) => {
  const client = new MongoClient(MONGO_URI, options);
  
  try {
    await client.connect()
    console.log("connected!");
    const db = client.db(dbname);

    const result = await db.collection("users").find().toArray();

    res.status(200).json({ status:200, data:result, message:"Success!"})
    
    client.close()
    console.log("disconnected!")

  } catch (error) {
    res.status(500).json({ status: 500, message: "Internal server error" }); 
  }
};

const getUser = async (req,res) => {
  const client = new MongoClient(MONGO_URI, options);
  const {id} = req.params;   
  console.log(id)

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db(dbname);
    const result = await db.collection("users").findOne({_id: id});
    console.log("Found the user. Data being sent")
    
    result === null
    ? res.status(404).json({status:404, message:"User not found."})
    :res.status(200).json({status:200, User:result._id, data:result, message:"Found user"})
        
    client.close();
    console.log("disconnected!");
  } catch (error) {
    res.status(404).json({status:404, message:"User not found."})
  }
};

const handleSignUp = async (req,res) => {
  
  const client = new MongoClient(MONGO_URI, options);
  const id = uuidv4();
  const createdUser = {_id:id, ...req.body}

  try {
    await client.connect()
    console.log("connected!");
    const db = client.db(dbname);

    await db.collection("users").insertOne(createdUser)
    console.log("Data has been sent")
    res.status(201).json({status:201, data:createdUser._id , message:"New user added"})
  } catch (error) {
    res.status(400).json({status:400, message:"Couldn't sign up user."})
  }
  client.close()
  console.log("disconnected!")
};

const handleLogIn = async (req,res) => {
  const client = new MongoClient(MONGO_URI, options);
  const {email, password} = req.body

  try {
    await client.connect()
    console.log("connected!");
    const db = client.db(dbname);

    const result = await db.collection("users").findOne({email: email, password: password})
    
    if (result === null) {

      res.status(404).json({status:404, message:"User not found, Please try again, otherwise please register."})

    } else if (result.artist === true && result.purchaser === false) {
      
      console.log("Artist was found. Now loggin in.")
      res.status(200).json({
        status:200, 
        Artist:result.artist ,
        Purchaser: result.purchaser,
        data:result._id , 
        message:`Now logged in as ${result.givenName} ${result.surname}. Redirecting to your profile.`
      })
      
      
    } else if (result.artist === false && result.purchaser === true) {

      console.log("Purchaser was found. Now loggin in.")
      res.status(200).json({
        status:200, 
        Artist:result.artist ,
        Purchaser: result.purchaser,
        data:result._id , 
        message:`Now logged in as ${result.givenName} ${result.surname}. Redirecting to your profile.`
      })
      
    };  
  } catch (error) {
    res.status(404).json({status:404, message:"User not found"})
  }
  client.close()
  console.log("disconnected!")
};

const updateCollection = async (req,res) => {
  const client = new MongoClient(MONGO_URI, options);
  const {id} = req.params;
  const user = {_id:id, ...req.body}

  try {
    await client.connect();
    console.log("connected!");        
    const db = client.db(dbname);

    const oldUser = await db.collection("users").findOne({_id: user._id})
    console.log(oldUser)
    // if (!oldCollection) {
    //   res.status(404).json({ status: 404, Info: collection._id, message:"That doesn't exist, please try another." }); 
    // } else {
      
    //   const update = await db.collection("users").updateOne({_id: oldCollection._id}, { $set: {...req.body}})
    //   console.log(update)

    res.status(200).json({status:200, oldUser})
    // }
    
    client.close();  
    console.log("disconnected!");

  } catch (error) {
    console.log(error.stack)
    res.status(409).json({ status: 409, message:"Conflict on updating collection"})
  }

};


module.exports = {
  getUsers,
  getUser,
  handleSignUp,
  handleLogIn,
  updateCollection
}