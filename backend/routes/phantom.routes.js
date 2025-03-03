const express=require("express");
const phantomRoutes=express.Router();
const { createPhantomResult, deletePhantomResult, getPhantomResults }=require("../controllers/phanton.controller");

// Create Event (POST)
phantomRoutes
    .post("/phantom", createPhantomResult)

    // Update Event (PUT)
    .delete("/phantom/:id", deletePhantomResult)

    // Get All Events (GET) 
    .get("/phantoms", getPhantomResults)


module.exports=phantomRoutes;