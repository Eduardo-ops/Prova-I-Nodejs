const subjectDB = []

const createSubject = subject => {
    subjectDB.push(subject)
}

const getAllSubjects = () => subjectDB

const updateSubject = (id, subject) => {
    const subjectIndex = subjectDB.findIndex(
        subject => subject.id == id
    )
    if (subjectIndex != -1) {
        subjectDB[subjectIndex] = subject
    }
}

const deleteSubject = subjectID => {
    const subjectIndex = subjectDB.findIndex(
        subject => subject.id == subjectID
    )
    if (subjectIndex != -1) {
        subjectDB.splice(subjectIndex, 1)
    }
}

module.exports = {
    createSubject,
    getAllSubjects,
    updateSubject,
    deleteSubject
}