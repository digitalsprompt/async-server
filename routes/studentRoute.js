const express = require("express")
const { getAllStudents, createStudents, getSingleStudent, updateStudent, deleteStudent } = require("../controllers/studentController")
const router = express.Router()

router.route("/students", ).get(getAllStudents).post(createStudents)
router.route("/students/:id").get(getSingleStudent).put(updateStudent).delete(deleteStudent)

module.exports = router