const express = require('express')
require('dotenv').config()
const app = express()

app.use('/places', require('./controllers/places.js'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 BRO!</h1>')
})

app.listen(process.env.PORT)