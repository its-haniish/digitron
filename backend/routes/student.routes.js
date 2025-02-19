const express = require("express");
const router = express.Router();
const {
    createStudent,
    updateStudent,
    deleteStudent,
    getTeams,
    getParticipants,
    getStudent
} = require("../controllers/studentController");

router
    // Create a student
    .post("/student", createStudent)

    // Update a student by ID
    .put("/student/:id", updateStudent)

    // Delete a student by ID
    .delete("/student/:id", deleteStudent)

    // Get teams by teamName query parameter
    .get("/teams", getTeams)

    // Get participants (Assuming this fetches all students or competition participants)
    .get("/participants", getParticipants)

    // Get a student by ID
    .get("/student/:id", getStudent);

module.exports = studentRouter;
