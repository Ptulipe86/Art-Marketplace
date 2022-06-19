"use strict";
require("dotenv").config()

var express = require('express');
const morgan = require("morgan");
const {handleSignUp} = require("./handlers");
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
  .post("/register", handleSignUp)


  //*/--------------------          Endpoints          -------------------------///

  //? this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
    });
  })

.listen(8000, () => console.log(`Listening on port 8000`));