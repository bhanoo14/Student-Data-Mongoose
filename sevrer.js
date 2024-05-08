const express = require('express');
const mongoose = require('mongoose');
const Student = require('./model/student.model');

// Middleware
const app = express();
app.use(express.json());

// Variables
const url = "mongodb://localhost:27017/student";
const port = process.env.PORT || 3000;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.error("MongoDB connection error:", error));

// Basic Routes
app.get('/', (req, res) => {
    res.send("This is the basic page");
});

// Post route for creating a new student
app.post('/', async (req, res) => {
    const { name, course, email } = req.body; // Destructuring request body

    const student = new Student({
        sName: name,
        sCourse: course,
        sEmail: email 
    });

    try {
        const savedStudent = await student.save();
        res.json(savedStudent);
    } catch (error) {
        console.error("Error saving student data:", error.message);
        res.status(500).json({ error: "Could not save student data" });
    }
});

// Listening Server
app.listen(port, () => {
    console.log(`Server is running @ ${port}`);
});
