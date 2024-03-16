const express = require('express')
const router = express.Router()

const homepageController = require('../controllers/homepageController')
const aboutpageController = require('../controllers/aboutpageController')
const contactageController = require('../controllers/contactpageController')

router.get('/', homepageController)
router.get('/about', aboutpageController)
router.get('/contact', contactageController)

module.exports = router
