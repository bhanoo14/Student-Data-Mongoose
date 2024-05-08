const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    sname: String,
    sCourse: String,
    sEmail: String
})

const Student = mongoose.model("Student", studentSchema)

module.exports = Student;