const foodModel = require('../models/foodModel')

exports.getFoods = async (req, res) => {
    try {
        const food = await foodModel.find()
        res.send(food)
    } catch (err) {
        res.status(500).send({ message: "Some problem while getting info" })
    }
}

exports.searchFood = async (req, res) => {
    try {
        let foods = await foodModel.find({
            name: { $regex: req.params.name, $options: 'i' }
        })
        if (foods.length !== 0) res.send(foods)
        else res.status(404).send({ message: "Food Item Not Found" })
    } catch (err) {
        res.status(500).send({ message: "Some problem in getting the food" })
    }
}
