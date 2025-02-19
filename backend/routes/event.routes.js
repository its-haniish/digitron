const express = require("express");
const eventRoutes = express.Router();
const { createEvent, updateEvent, deleteEvent, getAllEvents, getEventById } = require("../controllers/event.controllers");

// Create Event (POST)
eventRoutes
    .post("/event", createEvent)

    // Update Event (PUT)
    .put("/event/:id", updateEvent)

    // Delete Event (DELETE)
    .delete("/event/:id", deleteEvent)

    // Get All Events (GET) 
    .get("/events", getAllEvents)

    // Get Event by ID (GET)
    .get("/event/:id", getEventById)


module.exports = eventRoutes;