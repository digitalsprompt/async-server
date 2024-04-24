const Student = require("../models/studentModel")

const getAllStudents = async (req,res) => {
    try {
        const students = await Student.find()
            return res.status(200).json(students)
        
    } catch (error) {
        return res.status(500).json(error)
    }
}

const createStudents = async (req, res) => {
    if(!req.body.name){
        res.status(400).json({message: "please enter your name"})
    }
    if(!req.body.email){
        res.status(400).json({message: "please enter your email"})
    }
    if(!req.body.phone){
        res.status(400).json({message: "please enter your phone"})
    }
    if(!req.body.password){
        res.status(400).json({message: "please enter your password"})
    }


    try {
        const newStudent = await Student.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
        })
        return res.status(201).json(newStudent)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getSingleStudent = async (req, res) => {
    try {
        const singleStudents = await Student.findById(req.params.id)
            return res.status(200).json(singleStudents)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if (updatedStudent) {
            return res.status(200).json(updateStudent)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id)
        if (deletedStudent) {
            return res.status(200).json({message: "student deleted successfully"})
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}


module.exports = {getAllStudents, createStudents, getSingleStudent, updateStudent, deleteStudent}