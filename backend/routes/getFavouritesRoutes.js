const express = require('express')
const { getFavouritesItems, getFavouritesItemsLength } = require('../controllers/getFavouritesController.js')

const router = express.Router()

router.get("/", getFavouritesItems)
router.get("/favourites-length", getFavouritesItemsLength)


module.exports = router