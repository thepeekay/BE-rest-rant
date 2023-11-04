const express = require('express')
require('dotenv').config()
const app = express()
const methodOverrride = require('method-override')

//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(methodOverrride('_method'))

//Controllers & Routes
app.use('/places', require('./controllers/places.js'))

app.get('/', (req, res) => {
    res.render('home.jsx')
})

app.get('*', (req, res) => {
    res.render('error404.jsx')
})

app.listen(process.env.PORT)