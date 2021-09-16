const express = require('express')
const router = express.Router()
const subjectController = require('../controllers/subjects.controller')

router.post('/', subjectController.createSubject)
router.get('/', subjectController.getAllSubjects)
router.get('/:id', subjectController.getById)
router.put('/:id', subjectController.updateSubject)
router.delete('/:id', subjectController.deleteSubject)

module.exports = router
