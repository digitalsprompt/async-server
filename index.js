const express = require("express")
const bodyparser = require("body-parser")
const connectDB = require("./database/db")
const app = express()
require("dotenv").config()
const port = process.env.PORT
const studentRoute = require("./routes/studentRoute")



connectDB()




app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(studentRoute)



app.listen(port, () => {
    console.log(`server has started successfully. click http://localhost:${port} to open website`)
})