const subjectService = require('../services/subject.service')

const createSubject = (req, res) => {
    subjectService.createSubject(req.body)
    res.send('Cadastro realizado com sucesso!!!')
}

const getAllSubjects = (req, res) => {
    res.send(subjectService.getAllSubjects())
}

const updateSubject = (req, res) => {
    subjectService.updateSubject(req.params.id, req.body)
    res.send('Dados alterado com sucesso!!!')
}

const deleteSubject = (req, res) => {
    subjectService.deleteSubject(req.params.id)
    res.send('Deletado com sucesso!!!')
}

module.exports = {
    createSubject,
    getAllSubjects,
    updateSubject,
    deleteSubject
}