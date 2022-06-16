"use strict";

var express = require('express');
const morgan = require("morgan");
const {handleSignUp} = require("./handlers")


express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------
  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  //*/--------------------          Endpoints          -------------------------///
  .post("/signUp", handleSignUp)


  //*/--------------------          Endpoints          -------------------------///

  //? this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
    });
  })

.listen(8000, () => console.log(`Listening on port 8000`));