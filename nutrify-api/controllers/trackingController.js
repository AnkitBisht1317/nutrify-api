const trackingModel = require('../models/trackingModel')
const mongoose = require('mongoose')

exports.addTrack = async (req, res) => {
    try {
        await trackingModel.create(req.body)
        res.status(201).send({ message: "Food Added" })
    } catch (err) {
        res.status(500).send({ message: "Some problem" })
    }
}

exports.getTrackedFood = async (req, res) => {
    let userid = req.params.userid;
    let date = new Date(req.params.date)
    let strDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    try {
        const foods = await trackingModel
            .find({ userId: userid, eatenDate: strDate })
            .populate('userId')
            .populate('foodId')

        if (foods.length > 0) res.send(foods)
        else res.status(404).send({ message: "Food Item Not Found" })
    } catch (err) {
        res.status(500).send({ message: "Some Problem in getting the food" })
    }
}
