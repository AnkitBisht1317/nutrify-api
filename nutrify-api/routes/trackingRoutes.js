const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const trackingController = require('../controllers/trackingController')

router.post('/track', verifyToken, trackingController.addTrack)
router.get('/track/:userid/:date', verifyToken, trackingController.getTrackedFood)

module.exports = router
