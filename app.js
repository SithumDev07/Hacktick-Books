const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express()
const router = express.Router()

app.set('view-engine', 'ejs')
app.use(express.static('public'))

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

const user = require('./controllers/appController')

app.use(
    session({
        secret: "secretValue",
        resave: false,
        saveUninitialized: false
    })
)

app.use('/', router)
app.use('/user', user)

router.get('/', async (req, res) => {
    res.redirect('/user/signin')
})

module.exports = app
