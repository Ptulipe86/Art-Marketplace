"use strict";

var express = require('express');
const morgan = require("morgan");
const {
  handleSignUp, 
  getUsers, 
  getUser,
  handleLogIn
} = require("./handlers");
// const cloudinary = require("../backend/utilities/cloudinary");

express()

  // --------------------------------------------------------------------------------

  .use(morgan("tiny"))
  .use(express.json())
  .use(express.json({limit: '50mb'}))
  .use(express.urlencoded({extended: true, limit: '50mb'}))
  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  //*/--------------------          Endpoints          -------------------------///
  // all users 
  .post("/api/register", handleSignUp)
  .post("/api/logIn", handleLogIn)
  .get("/api/users",  getUsers)  
  .get("/api/users/:id", getUser)


  //*/--------------------          Endpoints          -------------------------///

  //? this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
    });
  })

.listen(8000, () => console.log(`Listening on port 8000`));