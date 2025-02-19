require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes"); 

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Routes
app.use("/api", routes); 

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
