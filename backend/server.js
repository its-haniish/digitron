    require("dotenv").config();
    const express = require("express");
    const cors = require("cors");
    const mongoose = require("mongoose");
    const eventRoutes = require("./routes/event.routes"); 
    const studentRoutes = require("./routes/student.routes");

    const app = express();
    const PORT = process.env.PORT || 8083;

    // Middleware
    app.use(express.json());
    app.use(cors());
    // app.use(cors({
    //     origin: ["https://digitron.rocks", "http://digitron.rocks"],
    //     methods: ["GET", "POST", "PUT", "DELETE"]
    // }));    

    // Routes
    app.use("/events", eventRoutes);
    app.use("/students", studentRoutes); 

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
