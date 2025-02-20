const { Members } = require('../models/ClubMembers');
const mongoose = require('mongoose');

// Get All Members
const getAllMembers = async (req, res) => {
    try {
        const members = await Members.find({});
        return res.status(200).json({ success: true, message: "Members retrieved successfully", data: members });
    } catch (error) {
        console.error("Error retrieving members:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
}

// Get Member by Id
const getMemberById = async (req, res) => {
    try {
        const { memberId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(memberId)) {
            return res.status(400).json({ success: false, message: "Invalid member ID format" });
        }

        const member = await Members.findById(memberId);

        if (!member) {
            return res.status(404).json({ success: false, message: "Member not found" });
        }

        return res.status(200).json({ success: true, message: "Member retrieved successfully", data: member });
    } catch (error) {
        console.error("Error retrieving member:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
}

module.exports = {
    getAllMembers,
    getMemberById
}