const express = require('express')
const { getCartItems, getCartItemsLength } = require('../controllers/getCartConroller')

const router = express.Router()

router.get("/", getCartItems)
router.get("/cart-length", getCartItemsLength)


module.exports = router