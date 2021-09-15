const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Sucesso')
})

const port = 8087
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})