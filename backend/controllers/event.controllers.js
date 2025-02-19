const { Events } = require("../models/Events");

const createEvent = async (req, res) => {
    try {
        const event = await Events.create(req.body); 
        return res.status(201).json({ message: "Event created successfully." });

    } catch (error) {
        console.error("Error creating event:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};


const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedEvent = await Events.findOneAndUpdate(
            { _id: id },         
            { ...req.body, updatedAt: Date.now() }, 
            { new: true }        
        );

        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json({ message: "Event updated successfully."});

    } catch (error) {
        console.error("Error updating event:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params; // Get event ID from URL

        const deletedEvent = await Events.findByIdAndDelete(id);

        if (!deletedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json({ message: "Event deleted successfully", event: deletedEvent });

    } catch (error) {
        console.error("Error deleting event:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



module.exports = {
    createEvent, updateEvent, deleteEvent
};


