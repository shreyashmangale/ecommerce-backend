const express = require('express')
const { addToFavourites } = require('../../controllers/post_controllers/postFavouritesControllers')

const router = express.Router()

router.post("/", addToFavourites)

module.exports = router