const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-rest.png'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-cat.png'
    }]
    res.render('places/index.jsx', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new.jsx')
})

router.post('/', (req, res) => {
    const { name, pic, city, state, cuisines } = req.body
    res.redirect('/places')
})


module.exports = router