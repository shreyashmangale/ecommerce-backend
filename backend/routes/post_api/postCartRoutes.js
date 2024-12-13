const express = require('express')
const {  addToCart } = require('../../controllers/post_controllers/postCartController.js')

const router = express.Router()

router.post("/", addToCart)


module.exports = router