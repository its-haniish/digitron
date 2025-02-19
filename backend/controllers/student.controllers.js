const Students = require('../models/Students');

const createStudent = async (req, res) => {
    try {
        const student = await Students.create(req.body);
        return res.status(201).json({ message: "Student created successfully.", student });
    } catch (error) {
        console.error("Error creating student:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params; // Get student ID from URL params
        const updateData = req.body;

        const updatedStudent = await Students.findOneAndUpdate(
            { _id: id }, 
            { ...updateData }, 
            { new: true } // Return the updated document
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        return res.status(200).json({ message: "Student updated successfully.", student: updatedStudent });
    } catch (error) {
        console.error("Error updating student:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params; // Get student ID from URL params

        const deletedStudent = await Students.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        return res.status(200).json({ message: "Student deleted successfully." });
    } catch (error) {
        console.error("Error deleting student:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const getTeams = async (req, res) => {
    try {
        const teamName = req.query.teamName;

        if (!teamName) {
            return res.status(400).json({ message: "teamName query parameter is required" });
        }

        // Find students who participated in a competition with the given teamName
        const students = await Students.find({ 
            "competitionsParticipated.teamName": teamName 
        });

        if (students.length === 0) {
            return res.status(404).json({ message: "No teams found with the given name" });
        }

        res.status(200).json({ message: "Teams retrieved successfully", teams: students });

    } catch (error) {
        console.error("Error fetching teams:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const getParticipants = async (req, res) => {
    try {
        const competitionName = req.query.competitionName;

        if (!competitionName) {
            return res.status(400).json({ message: "competitionName query parameter is required" });
        }

        // Find students who participated in the given competition
        const students = await Students.find({ 
            "competitionsParticipated.competitionName": competitionName 
        });

        if (students.length === 0) {
            return res.status(404).json({ message: "No students found who participated in the given competition" });
        }

        res.status(200).json({ message: "Students retrieved successfully", students });

    } catch (error) {
        console.error("Error fetching students by participations:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const getStudent = async (req, res) => {
    try {
        const student = await Students.findById(req.params.rollno);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        };
        return res.status(200).json({ message: "Student retrieved successfully", student });
    } catch (error) {
        console.error("Error fetching student:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

module.exports = { createStudent, updateStudent, deleteStudent, getTeams, getParticipants, getStudent };
