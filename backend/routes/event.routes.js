const express = require("express");
const router = express.Router();
const { createEvent, updateEvent, deleteEvent, getAllEvents } = require("../controllers/eventController");

// Create Event (POST)
router
    .post("/event", createEvent)

    // Update Event (PUT)
    .put("/event/:id", updateEvent)

    // Delete Event (DELETE)
    delete("/event/:id", deleteEvent)

    // Get All Events (GET) 
    .get("/events", getAllEvents)

    // Get Event by ID (GET)
    .get("/event/:id", getEventById)


module.exports = eventRouter;