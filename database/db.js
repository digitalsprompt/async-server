const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB)
        console.log("database connected successfully")
    } catch (error) {
        throw new Error("error conecting to database")
    }
}

module.exports = connectDB