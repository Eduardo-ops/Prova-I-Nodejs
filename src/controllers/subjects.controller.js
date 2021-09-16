const subjectService = require('../services/subject.service')

const createSubject = (req, res) => {
    const name = req.body.name
    const workload = req.body.workload
    const teacherName = req.body.teacherName

    if (name && workload && teacherName) {
        subjectService.createSubject(req.body)
        res.send('201 - Subject created sucessfully!')
    } else {
        res.send('400 - Error in validation of subject')
    }
}

const getAllSubjects = (req, res) => {
    res.send(subjectService.getAllSubjects())
}

const getById = (req, res) => {
    const id = req.params.id
    const subjectIndex = subjectService.subjectDB.findIndex(
        subject => subject.id == id
    )
    if (subjectIndex != -1) {
        res.send(subjectService.subjectDB[subjectIndex])
    } else {
        res.send('404 - Invalid Id')
    }
}

const updateSubject = (req, res) => {
    const id = req.body.id
    if (id != -1) {
        subjectService.updateSubject(req.body.id, req.body)
        res.send('200 - Validated id')
    } else {
        res.send("404 - Invalid id")
    }
}

const deleteSubject = (req, res) => {
    const id = req.body.id
    if (id != -1) {
        subjectService.deleteSubject(req.params.id)
        res.send('200 - Validated id')
    } else {
        res.send("404 - Invalid id")
    }
}

module.exports = {
    createSubject,
    getAllSubjects,
    getById,
    updateSubject,
    deleteSubject
}