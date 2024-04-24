const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    phone: {
        type: Number,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
        unique: true
    }
    
},
{
    timestamps: true
})

module.exports = mongoose.model("Student", studentSchema)