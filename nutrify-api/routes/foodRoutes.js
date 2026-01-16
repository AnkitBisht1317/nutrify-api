const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const foodController = require('../controllers/foodController')

router.get('/foods', verifyToken, foodController.getFoods)
router.get('/foods/:name', verifyToken, foodController.searchFood)

module.exports = router
