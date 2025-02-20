require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const eventRoutes = require("./routes/event.routes"); 
const studentRoutes = require("./routes/student.routes");

const app = express();
const PORT = process.env.PORT || 8083;

// Middleware
app.use(express.json());

// Routes
app.use("/api/events", eventRoutes);
app.use("/api/students", studentRoutes); 

// Connect to MongoDB and Start the Server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to the database.");
        app.listen(PORT, () => {
            console.log(`The server is live at: http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Error connecting to the database...");
        console.log(err);
    });
