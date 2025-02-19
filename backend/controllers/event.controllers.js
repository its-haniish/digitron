const { Events } = require("../models/Events");

// Create an Event
const createEvent = async (req, res) => {
    try {
        const event = await Events.create(req.body);
        return res.status(201).json({ message: "Event created successfully.", event });
    } catch (error) {
        console.error("Error creating event:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// Update an Event by ID
const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedEvent = await Events.findOneAndUpdate(
            { _id: id },
            { ...req.body, updatedAt: Date.now() },
            { new: true } // Returns updated document
        );

        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json({ message: "Event updated successfully.", event: updatedEvent });

    } catch (error) {
        console.error("Error updating event:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Delete an Event by ID
const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedEvent = await Events.findByIdAndDelete(id);

        if (!deletedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json({ message: "Event deleted successfully.", event: deletedEvent });

    } catch (error) {
        console.error("Error deleting event:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Get All Events
const getAllEvents = async (req, res) => {
    try {
        const events = await Events.find(); // Fetch all events
        res.status(200).json({ events });
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Get a Single Event by ID
const getEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Events.findById(id);

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json({ event });

    } catch (error) {
        console.error("Error fetching event:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getAllEvents,
    getEventById
};
