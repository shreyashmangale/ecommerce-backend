const express = require('express')
const { getSearchedItems } = require('../controllers/searchController.js')

const router = express.Router()

router.get("/", getSearchedItems)


module.exports = router