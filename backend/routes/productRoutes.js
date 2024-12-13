const express = require('express')
const { getProducts, getProduct, getCategorywiseProduct } = require('../controllers/productController')

const router = express.Router()

router.get("/", getProducts)
router.get("/:id", getProduct)
router.get("/category/:category", getCategorywiseProduct)


module.exports = router