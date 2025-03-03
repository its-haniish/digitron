const Phantoms=require("../models/Phantoms");

// Get All Events
const getPhantomResults=async (req, res) => {
    try {
        const phantomData=await Phantoms.find().sort({ adjusted_WPM: -1, accuracy: -1 }); // Apply sorting
        res.status(200).json({ phantomData });
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const createPhantomResult=async (req, res) => {
    try {
        const event=await Phantoms.create(req.body);
        return res.status(201).json({ message: "Phantom created successfully.", event });
    } catch (error) {
        console.error("Error creating phantom:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// Delete an Event by ID
const deletePhantomResult=async (req, res) => {
    try {
        const { id }=req.params;

        const deletedParticipant=await Phantoms.findByIdAndDelete(id);

        if (!deletedParticipant) {
            return res.status(404).json({ message: "Participant not found" });
        }

        res.status(200).json({ message: "Participant deleted successfully.", event: deletedParticipant });

    } catch (error) {
        console.error("Error deleting participant:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports={
    getPhantomResults,
    createPhantomResult,
    deletePhantomResult
};